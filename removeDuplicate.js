function removeDuplicates(arr) {
  
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!(newArr.includes(arr[i]))) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
removeDuplicates([1, 2, 2, 3, 4, 4])
module.exports = removeDuplicates;
