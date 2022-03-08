class Stack {
    length = 0;
    storage = {};
    
    constructor() {
        this.initMethods();
    }

    push(elem) {
        this.storage[this.length] = elem;
        this.length++; 
    }

    pop() {
        if (this.length === 0) return undefined;
        this.length--;
        
        const removedElem = this.storage[this.length];
        delete this.storage[this.length];


        return removedElem;
    }

    pick() {
        return this.storage[this.length - 1];
    }

    initMethods() {
        this.push = this.push.bind(this);
        this.pop = this.pop.bind(this);
        this.pick = this.pick.bind(this);
    }
}

const stack = new Stack();

stack.push(1);
stack.push(null),
stack.push(NaN);

console.log(stack.storage);
console.log(stack.length);

stack.pop();

console.log(stack.length);

console.log(stack.pick());