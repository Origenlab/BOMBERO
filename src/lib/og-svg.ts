/**
 * og-svg.ts
 * ──────────────────────────────────────────────────────────────────
 * Generador minimalista de Open Graph images en SVG (1200×630).
 *
 * SVG es un formato OG válido (Twitter/Slack lo aceptan; Facebook
 * prefiere PNG/JPG pero acepta SVG cuando el servidor declara el
 * MIME correcto). Para máxima compatibilidad reservamos también la
 * generación de un PNG en build con `og-png.ts` (opcional, futuro).
 *
 * Pipeline:
 *   - Endpoint `/api/og/[scope]/[id].svg.ts` invoca aquí.
 *   - SSR-friendly: una función pura que devuelve un string SVG.
 *   - Cero dependencias externas.
 * ──────────────────────────────────────────────────────────────────
 */

export interface OgPayload {
  scope: "estado" | "estacion" | "municipio" | "especialidad" | "telefonos";
  title: string;
  subtitle?: string;
  stat?: string; // ej. "18 estaciones"
  tags?: string[]; // chips inferiores (servicios/especialidades)
  badge?: string; // ej. "Yucatán · YUC"
}

// Escape XML
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrap(text: string, max: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > max) {
      if (line) lines.push(line);
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3); // máximo 3 líneas en el título
}

export function renderOgSvg(p: OgPayload): string {
  const titleLines = wrap(p.title, 32);
  const lineH = 84;
  const startY = 240 - ((titleLines.length - 1) * lineH) / 2;

  const tagChips =
    (p.tags ?? []).slice(0, 5).map((t, i) => {
      const x = 80 + i * 180;
      return `
      <g transform="translate(${x},540)">
        <rect width="160" height="48" rx="24" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.16)"/>
        <text x="80" y="30" text-anchor="middle" font-family="Inter,sans-serif" font-size="20" fill="#fff" font-weight="600">${esc(t.slice(0, 14))}</text>
      </g>`;
    });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="60%" stop-color="#1a0606"/>
      <stop offset="100%" stop-color="#2a0808"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0%" cy="0%" r="80%">
      <stop offset="0%" stop-color="rgba(220,38,38,0.35)"/>
      <stop offset="100%" stop-color="rgba(220,38,38,0)"/>
    </radialGradient>
    <radialGradient id="glow2" cx="100%" cy="100%" r="80%">
      <stop offset="0%" stop-color="rgba(249,115,22,0.25)"/>
      <stop offset="100%" stop-color="rgba(249,115,22,0)"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <g transform="translate(80,80)">
    <rect width="${p.badge ? p.badge.length * 14 + 60 : 240}" height="44" rx="22" fill="rgba(220,38,38,0.16)" stroke="rgba(220,38,38,0.4)"/>
    <circle cx="22" cy="22" r="6" fill="#f97316"/>
    <text x="38" y="29" font-family="Inter,sans-serif" font-size="18" font-weight="700" fill="#f97316" letter-spacing="1.2">${esc((p.badge ?? "BOMBERO.MX · Directorio").toUpperCase())}</text>
  </g>

  ${titleLines
    .map(
      (line, i) => `
  <text x="80" y="${startY + i * lineH}" font-family="Inter,system-ui,sans-serif" font-size="72" font-weight="800" fill="#fff" letter-spacing="-1.5">${esc(line)}</text>`,
    )
    .join("")}

  ${
    p.subtitle
      ? `<text x="80" y="${startY + titleLines.length * lineH + 28}" font-family="Inter,sans-serif" font-size="30" font-weight="500" fill="rgba(255,255,255,0.78)">${esc(p.subtitle.slice(0, 70))}</text>`
      : ""
  }

  ${
    p.stat
      ? `<g transform="translate(80,440)">
    <rect width="320" height="78" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)"/>
    <text x="20" y="48" font-family="Inter,sans-serif" font-size="44" font-weight="800" fill="#fbbf24">${esc(p.stat)}</text>
  </g>`
      : ""
  }

  ${tagChips.join("")}

  <g transform="translate(80,580)">
    <text font-family="Inter,sans-serif" font-size="22" font-weight="700" fill="rgba(255,255,255,0.55)">bombero.mx · NFPA · 24/7</text>
  </g>
</svg>`;
}
