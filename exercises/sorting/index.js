// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp
        }
    }
    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {
    let lengthSum = left.length + right.length
    let result = [];
    while (left && right) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
        if (result.length === lengthSum) {
            return result
        }
    }
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
