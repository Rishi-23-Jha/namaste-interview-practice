function generateAtoZ() {
    let result = []
    for (let i = 0; i < 26; i++) {
        result.push(String.fromCharCode(65 + i))
    }

    return result;
}

module.exports = { generateAtoZ };