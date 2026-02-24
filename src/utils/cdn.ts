

const CDN_BASE = "https://emwn2f4rcov.exactdn.com";
const isDev = import.meta.env.DEV;


export function cdn(path: string): string {
  if (isDev) return path;
  return `${CDN_BASE}${path}?lossy=1&strip=all`;
}


export function cdnW(path: string, width: number): string {
  if (isDev) return path;
  return `${CDN_BASE}${path}?w=${width}&lossy=1&strip=all`;
}
