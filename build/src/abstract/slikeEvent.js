import EventEmitter from "events";
export default class slikeEvent extends EventEmitter {
    client;
    name;
    constructor(client) {
        super();
        this.client = client;
    }
}
