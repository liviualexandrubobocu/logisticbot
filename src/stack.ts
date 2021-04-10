const MAX = 1000;

type IStack = {
    top?: number | undefined;
    a?: any[] | undefined;
    push: (x: any) => boolean | undefined;
} | undefined;

function Stack(): IStack {
    return {
        top: -1,
        a: [],
        push: () => undefined
    }
}

function push(x: any) {
    if(this.top >= MAX - 1 ){
        console.log("Stack overflow");
        return false;
    } else {
        this.top++;
        this.a[this.top] = x;
        console.log(`pushed on the stack ${x}`);
        return true;
    }
}


const setStack = (s?: IStack): IStack => {
    let stack = s ? {...s} : Stack();
    stack.push = push;
    return stack;
}

function main() {
    let stack1 = setStack();
    stack1.push(3);
    stack1.push(5);

    
    let stack2 = setStack();
    stack2.push('a');
    stack2.push('b');

    
    console.log(stack1);
    console.log(stack2);

}
main();
