// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(multiply(i, n))
//     }
// }

// function multiply(x, size) {
//     let result = [];
//     while (size !== 0) {
//         if (size <= x) {
//             result.push("#")
//         } else {
//             result.push(' ')
//         }
//         size -= 1
//     }
//     return result.reverse().join('');
// }


//Solution #2
function steps(n, row = 0, str = "") {
    if (n === row) {
        return;
    }

    if (n === str.length) {
        console.log(str);
        return steps(n, row + 1)
    }

    if (str.length <= row) {
        str += "#"
    } else {
        str += " "
    }

    steps(n, row, str)
}

module.exports = steps;
