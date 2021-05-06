"use strict";
exports.__esModule = true;
var STACK_MESSAGES;
(function (STACK_MESSAGES) {
    STACK_MESSAGES["OVERFLOW"] = "Stack overflow";
    STACK_MESSAGES["EMPTY"] = "Stack is empty";
})(STACK_MESSAGES || (STACK_MESSAGES = {}));
var Stack = /** @class */ (function () {
    function Stack(max) {
        this.max = max;
        this.top = -1;
        this.arr = new Array(max);
    }
    Stack.prototype.push = function (x) {
        if (this.top > (this.max - 1)) {
            return new RangeError(STACK_MESSAGES.OVERFLOW);
        }
        this.arr[++this.top] = x;
        return true;
    };
    Stack.prototype.pop = function () {
        if (this.top < 0) {
            return new RangeError(STACK_MESSAGES.OVERFLOW);
        }
        var top = this.arr[this.top];
        delete this.arr[this.top--];
        return top;
    };
    Stack.prototype.peek = function () {
        if (this.top < 0) {
            return new RangeError(STACK_MESSAGES.EMPTY);
        }
        return this.arr[this.top];
    };
    Stack.prototype.empty = function () {
        return this.top < 0;
    };
    return Stack;
}());
var log = function () {
    var thing = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        thing[_i] = arguments[_i];
    }
    if (thing[0] instanceof RangeError) {
        throw thing;
    }
    else {
        console.log.apply(console, thing);
    }
};
function main() {
    var s = new Stack(10);
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
// main();
exports["default"] = Stack;
