function sumN(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return false;
  if (n === 0) return 0;
  return n + sumN(n - 1);
}

module.exports = { sumN };

console.log(sumN(5))