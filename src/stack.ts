const MAX = 1000;
type IStack = {
    top: number;
    a?: any[];
}
function Stack(): IStack {
    return {
        top: -1
    }
}
const push = (stack: IStack, x: any) => {
    let { a, top } = stack;
    if(top >= MAX - 1 ){
        console.log("Stack overflow");
        return false;
    } else {
        a[++top] = x;
        console.log(`pushed on the stack ${x}`);
    }
}