// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Solution #3
function vowels(str) {
    const vowels = str.match(/[aeiou]/gi)
    return vowels ? vowels.length : 0;
}



//Solution #2 
// function vowels(str) {
//     let vowels = ['a', 'i', 'o', 'u', 'e']
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++
//         }
//     }
//     return count;
// }



// Solution #1 bulky 
// function vowels(str) {
//     let vowels = ['a', 'i', 'o', 'u', 'e']
//     const strObj = {};
//     let count = 0;
//     for (let word of str.replace(/\W/g, '').toLowerCase()) {
//         strObj[word] = strObj[word] + 1 || 1
//     }
//     for (let letter of vowels) {
//         count += (strObj[letter] ? strObj[letter] : 0)
//     }
//     return count
// }

module.exports = vowels;
