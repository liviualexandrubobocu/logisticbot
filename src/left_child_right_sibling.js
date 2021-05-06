"use strict";
exports.__esModule = true;
var LNode = /** @class */ (function () {
    function LNode(data) {
        this.data = data;
        this.child = null;
        this.next = null;
    }
    return LNode;
}());
var addSibling = function (node, data) {
    if (!node)
        return null;
    while (node.next !== null) {
        node = node.next;
    }
    node.next = new LNode(data);
    return node.next;
};
var addChild = function (node, data) {
    if (!node)
        return null;
    if (node.child !== null) {
        return addSibling(node.child, data);
    }
    node.child = new LNode(data);
    return node.child;
};
var recursiveTraverse = function (root) {
    if (root == null)
        return;
    while (root !== null) {
        console.log(root.data);
        if (root.child !== null) {
            recursiveTraverse(root.child);
        }
        root = root.next;
    }
};
var nonRecursiveTraverse = function (root) {
    var current = root;
    var done = false;
    var lastVisitedParent = null;
    while (!done) {
        console.log(current.data);
        if (current.child) {
            lastVisitedParent = current;
            current = current.child;
        }
        else if (current.next) {
            current = current.next;
        }
        else if (lastVisitedParent.next !== null) {
            current = lastVisitedParent.next;
        }
        else {
            done = true;
        }
    }
};
function main() {
    var root = new LNode(0);
    var n1 = addChild(root, 1);
    var n2 = addChild(root, 1);
    var n3 = addChild(root, 1);
    var n4 = addChild(n3, 2);
    var n5 = addChild(root, 1);
    var n6 = addChild(n5, 2);
    var n7 = addChild(n5, 2);
    var n8 = addChild(n5, 2);
    recursiveTraverse(root);
    nonRecursiveTraverse(root);
}
main();
