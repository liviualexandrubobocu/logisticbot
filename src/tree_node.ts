class LNode<T> {
    next: LNode<T>;
    child: LNode<T>;

    constructor(public data: T){
        this.child = null;
        this.next = null;
    }
}

export default LNode;