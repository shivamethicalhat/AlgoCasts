// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let last = this.head, count = 0;
        while (last) {
            count++
            last = last.next
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        while (lastNode) {
            if (!lastNode.next) {
                return lastNode
            }
            lastNode = lastNode.next;
        }

        return lastNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head ? this.head.next : null;
    }

    removeLast() {
        if (!(this.head && this.head.next)) {
            this.head = null;
            return;
        }

        let lastNode = this.head, preNode;

        while (lastNode) {
            console.log(lastNode)
            if (lastNode.next === null) {
                preNode.next = null;
                return;
            }
            preNode = lastNode
            lastNode = lastNode.next;
        }
    }

    insertLast(data) {
        let last = this.getLast()
        if (last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }

    getAt(index) {
        let counter = 0, node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++
        }
        return node;
    }

    removeAt(index) {
        if (!(this.head)) {
            return;
        };
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let last = this.head;
        let prev = null;
        let counter = 0;
        while (last) {
            if (counter === index) {
                prev.next = last.next;
                return
            }
            counter++
            prev = last;
            last = last.next;
        }
        return null;
    }

    insertAt(data, index) {
        if (index === 0) { // if index is 0
            this.insertFirst(data)
            return;
        }
        let prevNode = this.getAt(index - 1)
        if (prevNode) {
            const temp = prevNode.next;
            prevNode.next = new Node(data)
            prevNode.next.next = temp;
        } else {
            this.getLast().next = new Node(data)
        }
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
