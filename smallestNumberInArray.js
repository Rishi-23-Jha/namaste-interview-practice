
// Finding the smallest number in a given array
function findSmallest(arr) {
  if (!Array.isArray(arr)) {
    return false;  
  }

  if (arr.length === 0) {
    return null; 
  }

 
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || !isFinite(arr[i])) {
      return false;  
    }
  }
  
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;  
}

module.exports = { findSmallest };
