function factorial(n) {
  // Reject non-numbers, NaN, non-integers, and negatives
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return false;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

module.exports = { factorial };
