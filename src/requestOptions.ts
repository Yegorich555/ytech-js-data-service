/**
 * Options for dataService
 */
export default class RequestOptions {
    public force: Boolean = false //todo
    public forceIfNull: Boolean = false //todo
    public storeKey: string = null //todo
    public store: StoreFunction = (data) => { return data }
    public storeTime: Number = 0; //in minutes can be float
}

type StoreFunction = (data: any, response?: any, storage?: Object, storedValue?: any) => any;