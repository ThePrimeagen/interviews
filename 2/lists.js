// lists, stacks, and queueeueueuees

/*
const Node = {
    prev: null,
    next: null,
    value: ____
};
*/

function createNode(data, next = null, prev = null) {
    return {
        prev,
        next,
        data
    };
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._count = 0;
    }

    size() {
        return this._count;
    }

    get(idx) {
        if (idx < 0) {
            idx += this._count;
        }

        if (idx < 0) {
            return null;
        }

        if (idx >= this._count) {
            return null;
        }

        let curr = this.head;
        while (idx-- > 0) {
            curr = curr.next;
        }

        return curr;
    }

    insertAt(data, idx) {

        if (idx < 0) {
            throw new Error('That is completely ridiculous');
        }

        // what about inserting beyonds bounds?
        // we will put in null nodes
        // 2.  idx exists within the list length and its not head or tail.
        // 3.  idx is the head or tail.
        // 4.  idx is outside the bounds of the list
        //    1.  We have nothing in our list at all
        if (idx < this._count) {
            const node = this.get(idx);

            // this is the head and tail;
            if (!node) {
                this.head = this.tail = createNode(data);
                return;
            }

            const newNode = createNode(data, node);

            const prev = node.prev;
            if (prev) {
                newNode.prev = prev;
                prev.next = newNode;
            }

            node.prev = newNode;
            return;
        }
    }

    insertFirst(data) {
        this._count++;

        if (this.head === null) {
            this.head = this.tail = createNode(data);
            return;
        }

        const prevHead = this.head;
        this.head = createNode(data, this.head);
        prevHead.prev = this.head;
    }

    insertLast(data) {
        this._count++;

        if (this.tail === null) {
            this.head = this.tail = createNode(data);
            return;
        }

        const prevTail = this.tail;
        this.tail = createNode(data, null, this.tail);
        prevTail.next = this.tail;
    }

    removeAt(idx) {
        const node = this.get(idx);

        if (node !== null) {
            const prev = node.prev;
            const next = node.next;
            if (next) {
                next.prev = prev || null;
            }
            if (prev) {
                prev.next = next || null;
            }
            node.next = node.prev = null;

            // this.head = this.tail
            if (node === this.head) {
                this.head = next;
            }
            if (node === this.tail) {
                this.tail = prev;
            }
        }

        return node && node.data;
    }

    removeFirst() {
        if (this.head === null) {
            return null;
        }

        const retVal = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        return retVal;
    }

    removeLast() {
        if (this.tail === null) {
            return null;
        }

        const retVal = this.tail;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        return retVal;
    }
};

class Stack {
    constructor() {
        this._list = new LinkedList();
    }

    size() {
        return this._list.size();
    }

    push(data) {
        this._list.insertLast(data);
        return this._list.size();
    }

    pop() {
        return this._list.removeLast();
    }

    peek() {
        return this._list.get(this._list.size());
    }
}

class Queue {
    constructor() {
        this._list = new LinkedList();
    }

    size() {
        return this._list.size();
    }

    enqueue(data) {
        this._list.insertLast(data);
        return this._list.size();
    }

    dequeue() {
        return this._list.removeFirst();
    }

    peek() {
        return this._list.get(0);
    }
}
