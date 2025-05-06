'use strict';
(function compile() {
  function len1(x) { return x && (x.length === 1); }
  const u = function unpackSingleKey(k, x) {
    if (!x) { return x; }
    if (k === 0) { return (len1(x) ? x[0] : x); }
    const v = x[k];
    const l = (v !== undefined) && Object.keys(x);
    return (len1(l) && (l[0] === k)) ? v : x;
  };
  u.len1 = len1;
  u.df = u.bind(null, 'default');
  u.default = u; // Convenience for callers suffering from the u.df case.
  module.exports = u;
}());
