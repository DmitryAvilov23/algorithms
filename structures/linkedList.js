class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head = null;
    tail = null;

    constructor() {}

    append(data) {
        const node = new Node(data);

        if (this.tail) this.tail.next = node;
        if (!this.head) this.head = node;

        this.tail = node;
    }

    prepend(data) {
        const node = new Node(data, this.head);

        this.head = node;

        if (!this.tail) this.tail = node;
    }

    insertAfter(after, data) {
        const founded = this.find(after);

        if (!founded) {
            return undefined;
        }
 
        founded.next = new Node(data, founded.next);
    }

    remove(data) {
        if (!this.head) {
            return undefined;
        }

        if (this.head.data === data) this.head = this.head.next;

        let current = this.head;

        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        if (this.tail.data === data) this.tail = current;
    }

    find(data) {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;

        while (current) {
            if (current.data === data) return current;

            current = current.next;
        }
    }

    toArray() {
        const output = [];
        let current = this.head;

        while (current) {
            output.push(current);
            current = current.next;
        }

        return output;
    }
}

const linkedList = new LinkedList();

linkedList.append('world!');
linkedList.prepend('hi');
linkedList.append('foo');
linkedList.append('bazz');
linkedList.insertAfter('foo', 'bar');
linkedList.remove('world!');


console.log('<----- Linked List ----->');
console.log(linkedList);
console.log(linkedList.toArray());
console.log('FIND', linkedList.find('world!'));

