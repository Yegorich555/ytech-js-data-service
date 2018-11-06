export default class Storage {
    constructor() {
        this.set = (key, value, storeTime) => {
            this.lst[key] = {
                value,
                time: null //storeTime > 0 ? new Date().addMinutes(storeTime) : null,
            };
        };
        this.get = (key) => this.lst[key];
        this.lst = new Object();
    }
}
