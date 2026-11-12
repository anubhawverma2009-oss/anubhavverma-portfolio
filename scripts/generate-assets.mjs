/* Zero-dependency asset generator: OG image + PNG favicons.
   Run: node scripts/generate-assets.mjs  (output → public/)          */
import { deflateSync } from 'node:zlib'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'public')
mkdirSync(join(out, 'icons'), { recursive: true })

/* ------------------------- tiny PNG encoder ------------------------- */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()
const crc32 = (buf) => {
  let c = 0xffffffff
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
const chunk = (type, data) => {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}
function encodePNG(w, h, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0)
  ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // RGBA
  const stride = w * 4
  const raw = Buffer.alloc((stride + 1) * h)
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0 // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/* ------------------------- drawing helpers ------------------------- */
const lerp = (a, b, t) => a + (b - a) * t
const mix = (c1, c2, t) => [
  Math.round(lerp(c1[0], c2[0], t)),
  Math.round(lerp(c1[1], c2[1], t)),
  Math.round(lerp(c1[2], c2[2], t)),
]

function makeCanvas(w, h, paint) {
  const buf = Buffer.alloc(w * h * 4)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [r, g, b, a] = paint(x, y)
      const i = (y * w + x) * 4
      buf[i] = r; buf[i + 1] = g; buf[i + 2] = b; buf[i + 3] = a
    }
  }
  return buf
}

/* Blocky "AV" monogram — coordinates are cells in a 7x7 grid per glyph */
const GLYPH = {
  A: [[2,0],[3,0],[4,0],[1,1],[5,1],[0,2],[6,2],[0,3],[6,3],[0,4],[6,4],[1,5],[5,5],[2,6],[3,6],[4,6]],
  V: [[0,0],[6,0],[0,1],[6,1],[1,2],[5,2],[1,3],[5,3],[2,4],[4,4],[2,5],[4,5],[3,6]],
}
function drawMono(paintGlyph, cx, cy, cell, thickness, color, glowColor) {
  const glyphs = [
    { g: GLYPH.A, ox: cx - cell * 7.6 },
    { g: GLYPH.V, ox: cx + cell * 0.6 },
  ]
  for (const { g, ox } of glyphs) {
    for (const [gx, gy] of g) {
      const x0 = ox + gx * cell
      const y0 = cy + gy * cell
      for (let y = y0; y < y0 + cell; y++) {
        for (let x = x0; x < x0 + cell; x++) {
          paintGlyph(x, y, color, glowColor)
        }
      }
    }
  }
}

/* ------------------------- OG image 1200x630 ------------------------- */
const OW = 1200, OH = 630
const og = makeCanvas(OW, OH, (x, y) => {
  /* diagonal gradient: deep navy → charcoal */
  let c = mix([10, 12, 22], [5, 6, 10], (x / OW) * 0.55 + (y / OH) * 0.45)
  /* electric-blue / violet glows */
  const d1 = Math.hypot(x - OW * 0.18, y - OH * 0.12) / 460
  const g1 = Math.max(0, 1 - d1)
  const d2 = Math.hypot(x - OW * 0.86, y - OH * 0.9) / 520
  const g2 = Math.max(0, 1 - d2)
  const blue = [77, 141, 255], violet = [139, 92, 246]
  c = [
    Math.min(255, c[0] + blue[0] * g1 * 0.22 + violet[0] * g2 * 0.2),
    Math.min(255, c[1] + blue[1] * g1 * 0.22 + violet[1] * g2 * 0.2),
    Math.min(255, c[2] + blue[2] * g1 * 0.22 + violet[2] * g2 * 0.2),
  ]
  /* subtle grid */
  if (x % 60 === 0 || y % 60 === 0) {
    c = c.map((v) => Math.min(255, v + 7))
  }
  return [...c, 255]
})

/* glow ring behind monogram */
const RCX = OW / 2, RCY = OH / 2 - 10, RR = 205
for (let y = 0; y < OH; y++) {
  for (let x = 0; x < OW; x++) {
    const d = Math.hypot(x - RCX, y - RCY)
    if (Math.abs(d - RR) < 1.6) {
      const i = (y * OW + x) * 4
      og[i] = 138; og[i + 1] = 184; og[i + 2] = 255; og[i + 3] = 255
    } else if (d < RR + 90 && d > RR - 90) {
      const glow = Math.max(0, 1 - Math.abs(d - RR) / 90) * 0.35
      const i = (y * OW + x) * 4
      og[i] = Math.min(255, og[i] + 40 * glow)
      og[i + 1] = Math.min(255, og[i + 1] + 80 * glow)
      og[i + 2] = Math.min(255, og[i + 2] + 160 * glow)
    }
  }
}

/* monogram */
drawMono(
  (x, y, color) => {
    if (x < 0 || y < 0 || x >= OW || y >= OH) return
    const i = (y * OW + x) * 4
    og[i] = color[0]; og[i + 1] = color[1]; og[i + 2] = color[2]; og[i + 3] = 255
  },
  RCX, RCY - 88, 34, 0, [255, 255, 255]
)

/* caption bars (stand-in for text) */
const bar = (bx, by, bw, bh, col) => {
  for (let y = by; y < by + bh; y++)
    for (let x = bx; x < bx + bw; x++) {
      const i = (y * OW + x) * 4
      og[i] = col[0]; og[i + 1] = col[1]; og[i + 2] = col[2]; og[i + 3] = 255
    }
}
bar(RCX - 150, RCY + 108, 300, 5, [138, 184, 255])
bar(RCX - 96, RCY + 128, 192, 4, [255, 255, 255])

writeFileSync(join(out, 'og-image.png'), encodePNG(OW, OH, og))
console.log('✓ og-image.png (1200x630)')

/* ------------------------- favicons ------------------------- */
function makeIcon(size) {
  const s = size
  const r = s * 0.24
  const canvas = makeCanvas(s, s, (x, y) => {
    /* rounded-rect mask */
    const inRounded =
      (x >= r && x < s - r) || (y >= r && y < s - r) ||
      Math.hypot(x - r, y - r) <= r ||
      Math.hypot(x - (s - 1 - r), y - r) <= r ||
      Math.hypot(x - r, y - (s - 1 - r)) <= r ||
      Math.hypot(x - (s - 1 - r), y - (s - 1 - r)) <= r
    if (!inRounded) return [0, 0, 0, 0]
    /* diagonal gradient background */
    const t = (x / s) * 0.6 + (y / s) * 0.4
    const c = mix([77, 141, 255], [139, 92, 246], t)
    return [...c, 255]
  })
  /* white AV monogram */
  const cell = s / 12
  const set = (x, y) => {
    if (x < 0 || y < 0 || x >= s || y >= s) return
    const i = (y * s + x) * 4
    canvas[i] = 255; canvas[i + 1] = 255; canvas[i + 2] = 255; canvas[i + 3] = 255
  }
  const glyphs = [
    { g: GLYPH.A, ox: s / 2 - cell * 7.4 },
    { g: GLYPH.V, ox: s / 2 + cell * 0.4 },
  ]
  for (const { g, ox } of glyphs)
    for (const [gx, gy] of g)
      for (let yy = 0; yy < cell; yy++)
        for (let xx = 0; xx < cell; xx++)
          set(Math.round(ox + gx * cell + xx), Math.round(s / 2 - cell * 3.4 + gy * cell + yy))
  return encodePNG(s, s, canvas)
}

writeFileSync(join(out, 'icons', 'favicon-32.png'), makeIcon(32))
console.log('✓ icons/favicon-32.png')
writeFileSync(join(out, 'icons', 'apple-touch-icon.png'), makeIcon(180))
console.log('✓ icons/apple-touch-icon.png')

console.log('All assets generated in public/')
