import deepEquality from "./deep_equality";
import LNode from './tree_node';


const addSibling = <T>(node: LNode<T>, data: T): LNode<T> | null => {
    if(!node) return null;

    while(node.next !== null) {
        node = node.next;
    }
    node.next = new LNode<T>(data);

    return node.next;
}

const addChild = <T>(node: LNode<T>, data: T): LNode<T> | null => {
    if(!node) return null;

    if (node.child !== null) {
        return addSibling(node.child, data);
    }
    node.child = new LNode<T>(data);

    return node.child;
}

const recursiveTraverse = <T>(root: LNode<T>): void => {
    if(root == null) return;
    
    while(root !== null) {
        console.log(root.data);

        if(root.child !== null) {
            recursiveTraverse(root.child);
        }

        root = root.next;
    }
}

const nonRecursiveTraverse = <T>(root: LNode<T>, node: LNode<T>): LNode<T> | null => {
    let current: LNode<T> = root;
    let done = false;
    let lastVisitedParent = null;
    let searchedNode = null;

    while (!done) {
        if(deepEquality(current, node)) { 
            searchedNode = current; 
        }

        if (current.child) {
            lastVisitedParent = current;
            current = current.child;
        } else if (current.next) {
            current = current.next;
        } else if (lastVisitedParent.next !== null) {
            current = lastVisitedParent.next;
        } else {
            done = true;
        }
    }

    return searchedNode;

}

const nonRecursiveTraverseWithCallback = <T>(root: LNode<T>, callback: Function): void => {
    let current: LNode<T> = root;
    let done = false;
    let lastVisitedParent = null;

    while (!done) {
        callback(current);
        
        if (current.child) {
            lastVisitedParent = current;
            current = current.child;
        } else if (current.next) {
            current = current.next;
        } else if (lastVisitedParent.next !== null) {
            current = lastVisitedParent.next;
        } else {
            done = true;
        }
    }
}

const main = () => {
    let root = new LNode<number>(0);
    let n1 = addChild(root, 1);
    let n2 = addChild(root,1); 
    let n3 = addChild(root,1); 
    let n4 = addChild(n3,2); 
    let n5 = addChild(root,1); 
    let n6 = addChild(n5,2); 
    let n7 = addChild(n5,2); 
    let n8 = addChild(n5,2); 

    recursiveTraverse(root);
    nonRecursiveTraverse(root, n5);
}

main();

export default {
    addSibling,
    addChild,
    recursiveTraverse,
    nonRecursiveTraverse
}

// 0 1 1 1 2 1 2 2 2
