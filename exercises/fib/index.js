// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution #1 
// function fib(n) {
//     let addMe = 0, fibNumber = 1, temp;
//     if (n === 0) {
//         return 0
//     }
//     for (let i = 2; i <= n; i++) {
//         temp = fibNumber;
//         fibNumber += addMe;
//         addMe = temp
//     }
//     return fibNumber
// }

// Solution #2
function slowFib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 2) + fib(n - 1)
}

function memoize(fn){
  let cache = {};
  
  return function (...args){
    if(cache[args]){
      return cache[args]
    }
    
    let result = fn.apply(this,args);
    cache[args] = result;
    return result
  }
}

const fib = memoize(slowFib);

module.exports = fib;
