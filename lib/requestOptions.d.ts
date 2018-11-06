/**
 * Options for dataService
 */
export default class RequestOptions {
    force: Boolean;
    forceIfNull: Boolean;
    storeKey: string;
    store: StoreFunction;
    storeTime: Number;
}
declare type StoreFunction = (data: any, response?: any, storage?: Object, storedValue?: any) => any;
export {};
