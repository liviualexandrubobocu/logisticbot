interface LogisticBot {
    context: {};
    current: string;
    initial: string;
    states: {};
    connectors: [];
    parent: LogisticBot;
    children: LogisticBot[];
}

const LogisticBotFactory = (): LogisticBot => {
    return {
        context: {},
        current: "",
        initial: "",
        states: {},
        connectors: [],
        parent: {} as LogisticBot,
        children: [] as LogisticBot[]
    } as LogisticBot;
}

export default LogisticBot;