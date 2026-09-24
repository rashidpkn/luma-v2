const LIVE_HASHES = new Set([
  "hero",
  "how-it-works",
  "rewards",
  "compare",
  "services",
  "early-access",
  "get-started",
  "footer",
]);

/** Returns a usable href, or null when the target is not a real page or section. */
export function resolveHref(href: string): string | null {
  if (!href) return null;
  if (
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return href;
  }
  if (href === "/") return "/";
  if (href === "/how-it-works") return "#how-it-works";

  const hash = href.startsWith("/#")
    ? href.slice(2)
    : href.startsWith("#")
      ? href.slice(1)
      : "";
  if (!hash) return null;

  const id = hash.split(/[?#]/)[0];
  return LIVE_HASHES.has(id) ? `#${id}` : null;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
