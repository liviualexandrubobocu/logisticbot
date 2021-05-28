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
                console.log(current.data);
                current = current.right;
            }
            else {
                done = true;
            }
        }
    };
    /**
     * Post Order implementation using 2 stacks
     * @param root
     */
    Tree.prototype.postOrder = function (root) {
        var stack1 = new stack_oop_1["default"](10);
        var stack2 = new stack_oop_1["default"](10);
        stack1.push(root);
        while (!stack1.empty()) {
            var current = stack1.pop();
            stack2.push(current);
            if (current.left)
                stack1.push(current.left);
            if (current.right)
                stack1.push(current.right);
        }
        while (!stack2.empty()) {
            var current = stack2.pop();
            console.log(current.data);
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
    root.right.left = new TNode(6);
    root.right.left.left = new TNode(7);
    root.right.left.right = new TNode(8);
    var tree = new Tree();
    tree.postOrder(root);
    // 4 5 2 7 8 6 3 1
}
main();
