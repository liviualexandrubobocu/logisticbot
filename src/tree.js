"use strict";
exports.__esModule = true;
var stack_oop_1 = require("./stack_oop");
var TNode = /** @class */ (function () {
    function TNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
    }
    Tree.prototype.inOrder = function (root) {
        var stack = new stack_oop_1["default"](10);
        var current = root;
        var done = false;
        while (!done) {
            if (current !== null) {
                stack.push(current);
                current = current.left;
            }
            else if (stack.empty() === false) {
                current = stack.peek();
                // check RangeError here;
                stack.pop();
                // Error has been cleared, we can continue with current typecasted as TNode
                current = current;
                console.log('current data', current.data);
                current = current.right;
            }
            else {
                done = true;
            }
        }
    };
    return Tree;
}());
function main() {
    var root = new TNode(1);
    root.left = new TNode(2);
    root.right = new TNode(3);
    root.left.left = new TNode(4);
    root.left.right = new TNode(5);
    var tree = new Tree();
    tree.inOrder(root);
}
main();
