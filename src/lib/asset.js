// src/lib/asset.js
export const asset = (p) => {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, ''); // sin / final
  const path = String(p || '').replace(/^\/+/, '');                   // sin / inicial
  return `${base}/${path}`;                                           // base + path (relativo o absoluto)
};
