// The site can live under a sub-path (GitHub Pages serves it at /portfolio/).
// Wrap every root-relative link or image path with u() where it is rendered.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (path: string) => (path.startsWith('/') && !path.startsWith('//') ? base + path : path);

// The current path without the base, for "is this nav item active?" checks.
export const stripBase = (path: string) => (base && path.startsWith(base) ? path.slice(base.length) || '/' : path);
