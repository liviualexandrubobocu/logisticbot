interface LogisticBot {
    context: {};
    current: string;
    initial: string;
    states: {};
    connectors: [];
    parent: LogisticBot;
    children: LogisticBot[];
}

class LogisticBot {
    context: {} = {};
    current: string = "";
    initial: string = "";
    states: {} = {};
    connectors: [] = [];
    parent: LogisticBot;
    children: LogisticBot[];
    private started: boolean = false;
    
    constructor (){

    }

    start() {
        this.started = true;
    }

    stop() {
        this.started = false;
    }
}
export default LogisticBot;