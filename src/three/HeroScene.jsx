import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* =========================================================================
   HERO 3D SCENE — "The Experience Core"
   A faceted crystal icosahedron (the learner's core) inside a slow wireframe
   shell (everything still to explore), with orbiting satellites (ideas) and
   a drifting particle field (the wider tech universe).

   • Reacts to the pointer with smooth parallax.
   • Particle count and DPR adapt to device capability.
   • The render loop pauses when the hero is scrolled off-screen.
   ========================================================================= */

function Core({ lowPower }) {
  const group = useRef(null)
  const core = useRef(null)
  const shell = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (core.current) {
      core.current.rotation.y += delta * 0.16
      core.current.rotation.x = Math.sin(t * 0.22) * 0.14
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.06
      shell.current.rotation.z += delta * 0.03
    }
    if (group.current) {
      /* gentle float + pointer parallax */
      group.current.position.y = Math.sin(t * 0.7) * 0.09
      const px = state.pointer.x
      const py = state.pointer.y
      group.current.rotation.y += (px * 0.42 - group.current.rotation.y) * 0.045
      group.current.rotation.x += (-py * 0.3 - group.current.rotation.x) * 0.045
    }
  })

  return (
    <group ref={group}>
      {/* faceted crystal core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[1.32, lowPower ? 0 : 1]} />
        <meshStandardMaterial
          color="#131a30"
          metalness={0.9}
          roughness={0.24}
          flatShading
          emissive="#0a1030"
          emissiveIntensity={0.55}
        />
      </mesh>

      {/* wireframe shell */}
      <mesh ref={shell} scale={1.42}>
        <icosahedronGeometry args={[1.32, 1]} />
        <meshBasicMaterial color="#5f8dff" wireframe transparent opacity={0.14} />
      </mesh>

      {/* second, tighter shell in cyan */}
      <mesh scale={1.18}>
        <icosahedronGeometry args={[1.32, 0]} />
        <meshBasicMaterial color="#39d5f0" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function Satellite({ radius, speed, offset, tilt, size, color }) {
  const ref = useRef(null)
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset
    if (!ref.current) return
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.9) * 0.22, Math.sin(t) * radius)
    ref.current.rotation.x = t * 1.4
    ref.current.rotation.y = t * 1.1
  })
  return (
    <group rotation={[tilt, 0, tilt * 0.6]}>
      <mesh ref={ref}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={0.85}
          roughness={0.3}
          flatShading
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* faint orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.006, 6, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.22} />
      </mesh>
    </group>
  )
}

function Particles({ count }) {
  const ref = useRef(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      /* random point in a spherical shell */
      const r = 3.1 + Math.random() * 4.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.62
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.018
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#7fa7ff"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function HeroScene({ visible = true, lowPower = false, isMobile = false }) {
  const particleCount = lowPower ? 320 : isMobile ? 520 : 1100

  return (
    <div className="hero__canvas" aria-hidden="true">
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, lowPower ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 7.4], fov: 40 }}
        gl={{ antialias: !lowPower, alpha: true, powerPreference: 'high-performance' }}
      >
      <ambientLight intensity={0.35} />
      <directionalLight position={[-4, 6, 3]} intensity={1.1} color="#bcd0ff" />
      <pointLight position={[5, 3, 4]} intensity={90} decay={2} color="#4d8dff" />
      <pointLight position={[-5, -2, 3]} intensity={70} decay={2} color="#8b5cf6" />
      <pointLight position={[0, 5, -4]} intensity={50} decay={2} color="#39d5f0" />

      <group position={[isMobile ? 0 : 2.35, isMobile ? 1.05 : -0.25, 0]} scale={isMobile ? 0.62 : 1}>
        <Core lowPower={lowPower} />
        <Satellite radius={2.45} speed={0.34} offset={0} tilt={0.42} size={0.085} color="#4d8dff" />
        <Satellite radius={2.95} speed={-0.22} offset={2.2} tilt={-0.3} size={0.065} color="#8b5cf6" />
        {!lowPower && <Satellite radius={3.35} speed={0.15} offset={4.4} tilt={0.18} size={0.05} color="#39d5f0" />}
        <Particles count={particleCount} />
      </group>
      </Canvas>
    </div>
  )
}
