class Queue {
    storage = {};
    counter = 0;

    get isEmpty() {
        return !Object.keys(this.storage).length;
    }

    get length() {
        return Object.keys(this.storage).length;
    }

    constructor() { this.initMethods(); };

    initMethods() {
        this.enqueue = this.enqueue.bind(this);
        this.dequeue = this.dequeue.bind(this);
        this.front = this.front.bind(this);
        this.rebuild = this.rebuild.bind(this);
    }

    enqueue(elem) {
        this.storage[this.counter] = elem;
        this.counter++;
    }

    dequeue() {
        delete this.storage[0];
        this.rebuild();
    }

    front() {
        return this.storage[0];
    }

    rebuild() {
        this.counter = 0;

        for (let key in this.storage) {
            const obj = this.storage[key];

            delete this.storage[key];

            this.storage[this.counter] = obj;
            this.counter++;
        }
    }
}

const queue = new Queue();

console.log('<----- Queue ----->');

queue.enqueue('hello');
queue.enqueue({ a: 1, b: 2 });
queue.enqueue(NaN);

console.log('STORAGE', queue.storage);

queue.dequeue();

console.log('STORAGE', queue.storage);

queue.enqueue(3);

console.log('STORAGE', queue.storage);

console.log('Is storage empty?', queue.isEmpty);

console.log(queue.length);