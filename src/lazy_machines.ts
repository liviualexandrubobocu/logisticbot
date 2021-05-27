import { addChild, nonRecursiveTraverse, nonRecursiveTraverseWithCallback } from "./left_child_right_sibling";
import LogisticBot from "./logistic_bot";

const stopLogisticBot = (logisticBot: LogisticBot) => {
    logisticBot.stop();
}

const startLogisticBot = (logisticBot: LogisticBot) => {
    logisticBot.start();
}

const lazyLoadSubTree = (tree, machine) => {
    const subTree = nonRecursiveTraverse(tree, machine);
    nonRecursiveTraverseWithCallback(subTree, stopLogisticBot);
};

const lazyLoadChild = (tree, machine) => {
    const child = nonRecursiveTraverse(tree, machine);
    child.start();
};