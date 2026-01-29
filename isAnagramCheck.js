function isAnagram(s,t) {
    if(s.length !== t.length) return false;
    
    const freq = {};
    
    for(let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    for(let char of t) {
        if(!freq[char]) return false;
        freq[char]--
    }
    
    return true;
}

console.log(isAnagram('hello', 'elloh'))
console.log(isAnagram('hello', 'ellh'))