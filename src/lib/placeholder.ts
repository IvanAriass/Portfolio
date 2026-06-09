function svgPlaceholder(title: string, from: string, to: string, label: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${from}"/>
        <stop offset="100%" style="stop-color:${to}"/>
      </linearGradient>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.08)"/>
      </pattern>
    </defs>
    <rect width="800" height="450" fill="url(#g)"/>
    <rect width="800" height="450" fill="url(#dots)"/>
    <rect x="60" y="60" width="680" height="330" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <text x="400" y="195" text-anchor="middle" fill="white" font-size="28" font-weight="700" font-family="system-ui,sans-serif">${title}</text>
    <text x="400" y="235" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="15" font-family="system-ui,sans-serif">${label}</text>
    <line x1="350" y1="260" x2="450" y2="260" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <circle cx="400" cy="340" r="6" fill="rgba(255,255,255,0.15)"/>
    <circle cx="420" cy="340" r="6" fill="rgba(255,255,255,0.15)"/>
    <circle cx="380" cy="340" r="6" fill="rgba(255,255,255,0.15)"/>
  </svg>`
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

export const projectPlaceholders: Record<string, { from: string; to: string; label: string }[]> = {
  voluntapp: [
    { from: '#6366f1', to: '#8b5cf6', label: 'Panel de actividades' },
    { from: '#4f46e5', to: '#7c3aed', label: 'Vista móvil' },
  ],
  ecoquest: [
    { from: '#059669', to: '#10b981', label: 'Mapa de misiones' },
    { from: '#047857', to: '#34d399', label: 'Ranking de jugadores' },
  ],
  kebab: [
    { from: '#ea580c', to: '#f59e0b', label: 'Gestión de menú' },
    { from: '#dc2626', to: '#f97316', label: 'Seguimiento de pedidos' },
  ],
}

export function getProjectImages(id: string, realImage: string): string[] {
  const ph = projectPlaceholders[id]
  if (!ph) return [realImage]
  return [realImage, ...ph.map((p) => svgPlaceholder(
    id.charAt(0).toUpperCase() + id.slice(1),
    p.from,
    p.to,
    p.label,
  ))]
}
