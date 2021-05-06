import Stack from "./stack_oop";
type INode<T> = {
    data: T;
    left: INode<T>;
    right: INode<T>;
} | null;

// function TNode(data: string, left: INode, right: INode) {
//     return {
//         data,
//         left,
//         right
//     } as INode;
// }

// const inOrderTraversal = (node) => {
//     if (node === null) return;
//     inOrderTraversal(node.left);
//     console.log(node.data);
//     inOrderTraversal(node.right);
// }

// const postOrderTraversal = (node) => {
//     if (node === null) return;
//     postOrderTraversal(node.left);
//     postOrderTraversal(node.right);
//     console.log(node.data);
// }

// const preOrderTraversal = (node) => {
//     if(node === null) return;
//     console.log(node.data);
//     preOrderTraversal(node.left);
//     preOrderTraversal(node.right);
// }

interface ITree<T> {
    inOrder: (root: TNode<T>) => void;
}

class TNode<T> implements INode<T> {
    left: INode<T>;
    right: INode<T>;
    constructor(public data: T) {
        this.left = null;
        this.right = null;
    }
}

class Tree<T> implements ITree<T> {
    inOrder(root: TNode<T>) {
        let stack: Stack<TNode<T>> = new Stack<TNode<T>>(10);
        let current: TNode<T> | RangeError = root;
        let done = false;

        while (!done) {
            if (current !== null) {
                stack.push(current);
                current = current.left;
            } else if (stack.empty() === false) {
                current = stack.peek();
                // check RangeError here;

                stack.pop();

                // Error has been cleared, we can continue with current typecasted as TNode
                current = current as TNode<T>;

                console.log(current.data);

                current = current.right;
            } else {
                done = true;
            }
        }


    }
}

function main() {
    let root: TNode<number> = new TNode<number>(1);
    root.left = new TNode<number>(2);
    root.right = new TNode<number>(3);
    root.left.left = new TNode<number>(4);
    root.left.right = new TNode<number>(5);
    const tree = new Tree<number>();
    tree.inOrder(root);
}

main();