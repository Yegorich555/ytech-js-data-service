export default class Storage {
    set: AddFunction = (key: string, value, storeTime) => {
        this.lst[key] = {
            value,
            time: null//storeTime > 0 ? new Date().addMinutes(storeTime) : null,
        }
    }
    get: GetFunction = (key: string) => this.lst[key];
    lst: any = new Object();
}

type AddFunction = (key: string, value: any, storeTime: Number) => void
type GetFunction = (key: string) => any