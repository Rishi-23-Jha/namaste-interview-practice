function capitalizeWords(sentence) {
    // Your implementation
    sentence = sentence.trim();

    if (sentence === "") {
        return "";
    }

    var words = sentence.split(" ");
    var result = [];

    for (var i = 0; i < words.length; i++) {
        if (words[i] === "") {
            continue;
        }

        var word = words[i].toLowerCase();
        var capitalizedWord =
            word[0].toUpperCase() + word.slice(1);

        result.push(capitalizedWord);
    }

    return result.join(" ");
 
}

//For the purpose of user debugging.
capitalizeWords("hello world");
module.exports = capitalizeWords