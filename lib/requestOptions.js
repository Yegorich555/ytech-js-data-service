/**
 * Options for dataService
 */
export default class RequestOptions {
    constructor() {
        this.force = false; //todo
        this.forceIfNull = false; //todo
        this.storeKey = null; //todo
        this.store = (data) => { return data; };
        this.storeTime = 0; //in minutes can be float
    }
}
