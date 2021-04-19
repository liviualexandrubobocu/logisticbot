interface IStack<T> {
    push: (x: T) => boolean | RangeError;
    pop: () => T | RangeError;
    peek: () => T | RangeError;
    empty: () => boolean;
}

enum STACK_MESSAGES {
    OVERFLOW = "Stack overflow",
    EMPTY = "Stack is empty"
}

class Stack<T> implements IStack<T> {
    private top: number = -1;
    private arr: T[];

    constructor(private max: number){
        this.arr = new Array(max);
    }

    push(x: T): boolean | Error {
        if(this.top > (this.max - 1)){
            return new RangeError(STACK_MESSAGES.OVERFLOW);
        } 
        this.arr[++this.top] = x;
        return true;
    }

    pop(): T | Error {
        if(this.top < 0) {
            return new RangeError(STACK_MESSAGES.OVERFLOW);
        }
        const top = this.arr[this.top];
        delete this.arr[this.top--];
        return top;
    }

    peek(): T | RangeError {
        if(this.top < 0) {
            return new RangeError(STACK_MESSAGES.EMPTY);
        } 
        return this.arr[this.top];
    }

    empty(): boolean {
        return this.top < 0;
    }
}

type AltString = string | null;

const log = (...thing: any[]) => {
    if(thing[0] instanceof RangeError) {
        throw thing;
    } else {
        console.log(...thing);
    }
}

function main() {
    const s = new Stack<AltString>(10);
    s.push('test');
    s.push('test1');
    log('s before pop', s);
    log(s.pop());
    log('s after pop ', s);
    log(s.pop());
    log('s after pop ', s);
    log(s.pop());
    log('s with throw after pop ', s);
}

main();