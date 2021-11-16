// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

// solution #1
// function pyramid(n) {
//     const mid = Math.floor((2 * n - 1) / 2) + 1
//     for (let row = 1; row <= n; row++) {
//         let l = ""
//         for (let col = 1; col <= 2 * n - 1; col++) {
//             if ((mid - row < col) && (mid + row > col)) {
//                 l += "#"
//             } else {
//                 l += " "
//             }
//         }
//         console.log(l)
//     }
// }

// Solution #2
function pyramid(n, row = 0, str = "") {
    const mid = Math.floor((2 * n - 1) / 2) //1
    if (n === row) {
        return;
    }
    if (2 * n - 1 === str.length) { 
        console.log(str);
        return pyramid(n, row + 1)
    }

    if (str.length >= mid - row && str.length <= mid + row) {
        str += "#"
    } else {
        str += " "
    }

    pyramid(n, row, str)
}

module.exports = pyramid;
