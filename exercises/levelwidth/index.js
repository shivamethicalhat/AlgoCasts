// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counterArray = [];
    let storage = [root,'STOP'];
    let counter = 0;
    while(storage.length > 0){
        let node = storage.shift();
        if(node === "STOP" && storage.length > 0){
          counterArray.push(counter);
          counter = 0;
          storage.push(node)
        }else if(node !== "STOP"){
          storage.push(...node.children) 
          counter++
        }else{
          counterArray.push(counter);
        }
    }
    return counterArray
}

module.exports = levelWidth;
