// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Solution #1
function anagrams(stringA, stringB) {
    const stringAObj = objectifiy(stringA), stringBObj = objectifiy(stringB);
    if (Object.keys(stringAObj).length !== Object.keys(stringBObj).length) {
        return false
    }
    for (let char in stringAObj) {
        if ((stringAObj[char] !== stringBObj[char])) {
            return false
        }
    }
    return true
}

function objectifiy(string) {
    const charObj = {};
    for (let char of string.replace(/\W/g, '').toLowerCase()) {
        charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj
}


// Solution #2

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(string) {
//     return string.replace(/\W/g, '').toLowerCase().split('').sort().join('');
// }

module.exports = anagrams;
