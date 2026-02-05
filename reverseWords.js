function reverseWords(sentence) {
    // Your implementation 
    return sentence
        .split(/(\s+)/)
        .map(part => {
            return part.trim() ? part.split('').reverse().join('') : part;
        })
        .join('')
}

//For the purpose of user debugging.
reverseWords("Hello World");

module.exports = reverseWords