/**
 * Helper to handle Astro base URL for GitHub Pages deployment.
 * Supports both root domain and repository subpath (e.g. /La-beauty/).
 */
const rawBase = import.meta.env.BASE_URL ?? '/';
export const BASE_PATH = rawBase.replace(/\/$/, '');

export function getPath(path: string = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('#')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
