function findMissingNumber(nums) {
   
    const n = nums.length;
    const expSum = (n * (n + 1) / 2)

    const sum = nums.reduce((acc, curr) => acc + curr, 0)

    return expSum - sum;
}


findMissingNumber([3,0,1]);

module.exports = findMissingNumber