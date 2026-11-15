/* =========================================================================
   CERTIFICATES
   -------------------------------------------------------------------------
   featured: each entry renders its own clickable card. Add entries here —
   no JSX changes needed. Template:
     { title: 'Certificate title', issuer: 'Organization', date: '2025',
       url: 'https://…' }        (date is optional; omit the key entirely)
   drive.url: keep null to hide the Drive card; a valid URL shows it.
   ========================================================================= */
export const certificates = {
  description:
    'Every certificate represents a step forward — from exploring new technologies to participating in competitions, workshops and learning experiences.',
  featured: [],
  linkedin: {
    title: 'My Certifications on LinkedIn↗',
    subtitle: 'Explore my certificates, achievements and latest learning updates.',
    label: 'Click to Explore All My Certificates & Latest Updates on LinkedIn',
    url: 'https://www.linkedin.com/in/anbhav-verma-b80142289/details/certifications/',
  },
  drive: {
    title: 'View All My Certificates on Google Drive ↗',
    subtitle: 'Access the complete certificate collection.',
    label: 'Click to View All My Certificates on Google Drive',
    url: 'https://drive.google.com/drive/folders/1eZaCixmay7AKzs7Jgf-DFIIRP2IqZMiw?usp=drive_link',
  },
}
