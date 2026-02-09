
function customSort(arr) {
  let numArr = [];
  let stringArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number') {
      numArr.push(arr[i])
    }

    else {
      stringArr.push(arr[i])
    }
  }


  stringArr.sort();              
  numArr.sort((a, b) => a - b);  

  return stringArr.concat(numArr);
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;
