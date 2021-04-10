type INode = { 
    data: string;
    left: INode;
    right: INode;
} | null;

function TNode(data: string, left: INode, right: INode) {
    return {
        data,
        left,
        right
    } as INode;
}

const inOrderTraversal = (node) => {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
}

const postOrderTraversal = (node) => {
    if (node === null) return;
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
}

const preOrderTraversal = (node) => {
    if(node === null) return;
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}