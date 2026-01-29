function countNegatives(arr) {

  if (!Array.isArray(arr)) return false;
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i]))
      return false;


    if (arr[i] < 0) count++

  }
  return count;
}


module.exports = { countNegatives };