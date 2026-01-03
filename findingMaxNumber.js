function findMaxNumber(arr) {
 let max = arr[0];
    if(arr.length == 0) return null;
    for(let i = 0; i < arr.length; i++){
           
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

//For the purpose of user debugging.
console.log(findMaxNumber([-10,-20,-30,-1]));

module.exports = findMaxNumber