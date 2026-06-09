function svgPlaceholder(title: string, from: string, to: string, label: string): string {
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">`,
    `<defs>`,
    `<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">`,
    `<stop offset="0%" style="stop-color:${from}"/>`,
    `<stop offset="100%" style="stop-color:${to}"/>`,
    `</linearGradient>`,
    `<linearGradient id="t" x1="0%" y1="0%" x2="100%" y2="0%">`,
    `<stop offset="0%" style="stop-color:rgba(255,255,255,0.15)"/>`,
    `<stop offset="50%" style="stop-color:rgba(255,255,255,0.05)"/>`,
    `<stop offset="100%" style="stop-color:rgba(255,255,255,0.15)"/>`,
    `</linearGradient>`,
    `</defs>`,
    `<rect width="800" height="450" fill="url(#g)"/>`,
    `<rect x="0" y="0" width="800" height="36" fill="rgba(0,0,0,0.15)"/>`,
    `<circle cx="20" cy="18" r="5" fill="rgba(255,255,255,0.3)"/>`,
    `<circle cx="36" cy="18" r="5" fill="rgba(255,255,255,0.3)"/>`,
    `<circle cx="52" cy="18" r="5" fill="rgba(255,255,255,0.3)"/>`,
    `<rect x="70" y="12" width="120" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>`,
    `<rect x="70" y="44" width="180" height="8" rx="2" fill="rgba(255,255,255,0.08)"/>`,
    `<rect x="70" y="58" width="660" height="1" fill="rgba(255,255,255,0.06)"/>`,
    `<rect x="70" y="75" width="300" height="14" rx="3" fill="url(#t)"/>`,
    `<rect x="70" y="97" width="660" height="120" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`,
    `<rect x="80" y="107" width="200" height="100" rx="4" fill="rgba(255,255,255,0.04)"/>`,
    `<rect x="290" y="107" width="200" height="100" rx="4" fill="rgba(255,255,255,0.04)"/>`,
    `<rect x="500" y="107" width="220" height="100" rx="4" fill="rgba(255,255,255,0.04)"/>`,
    `<rect x="70" y="230" width="660" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`,
    `<rect x="80" y="240" width="80" height="60" rx="4" fill="rgba(255,255,255,0.04)"/>`,
    `<rect x="170" y="245" width="140" height="8" rx="2" fill="rgba(255,255,255,0.08)"/>`,
    `<rect x="170" y="258" width="100" height="6" rx="2" fill="rgba(255,255,255,0.05)"/>`,
    `<rect x="170" y="272" width="80" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>`,
    `<rect x="70" y="320" width="660" height="1" fill="rgba(255,255,255,0.06)"/>`,
    `<text x="400" y="370" text-anchor="middle" fill="white" font-size="22" font-weight="700" font-family="system-ui,sans-serif" opacity="0.9">${title}</text>`,
    `<text x="400" y="396" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="14" font-family="system-ui,sans-serif">${label}</text>`,
    `</svg>`,
  ].join('\n')
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const projectPlaceholders: Record<string, { from: string; to: string; label: string }[]> = {
  voluntapp: [
    { from: '#6366f1', to: '#8b5cf6', label: 'Panel de administración' },
    { from: '#4f46e5', to: '#7c3aed', label: 'Vista móvil — actividades' },
  ],
  ecoquest: [
    { from: '#059669', to: '#10b981', label: 'Exploración de misiones' },
    { from: '#047857', to: '#34d399', label: 'Progreso y estadísticas' },
  ],
  kebab: [
    { from: '#ea580c', to: '#f59e0b', label: 'Catálogo de productos' },
    { from: '#dc2626', to: '#f97316', label: 'Panel de pedidos' },
  ],
}

export function getProjectImages(id: string, realImage: string): string[] {
  const ph = projectPlaceholders[id]
  if (!ph) return [realImage]
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  return [realImage, ...ph.map((p) => svgPlaceholder(name, p.from, p.to, p.label))]
}
