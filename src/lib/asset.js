// src/lib/asset.js
export const asset = (p) => new URL(p, import.meta.env.BASE_URL).href;
