export const get = (p, o) =>
  p.reduce((xs, x) => (xs && typeof xs[x] !== "undefined" ? xs[x] : null), o);
