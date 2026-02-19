const CDN_BASE = "https://emwn2f4rcov.exactdn.com";
function cdnW(path, width) {
  return `${CDN_BASE}${path}?w=${width}&lossy=1&strip=all`;
}

export { cdnW as c };
