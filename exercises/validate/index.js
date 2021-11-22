// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    //if min and max is null
    //also if left is less then the root and right is greater then root
    if(max !== null && node.data > max){ //checkin if current node data is greater then max
        return false
    }

    if(min !== null && node.data < min){ //checkin if current node data is less then min
        return false
    }

    if(node.left && !validate(node.left,min,node.data)){ // if left exist and call validate function with max value of node data
        return false;// max data for left hand side
    }

    if(node.right && !validate(node.right,node.data,max)){ // if right exist and call validate function with min value of node data
        return false; // min data for right hand side
    }

    return true;
}

module.exports = validate;
