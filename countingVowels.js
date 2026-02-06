function countVowels(str) {
    // Your implementation
    const vowels = 'aeiou'
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels