export default class Storage {
    set: AddFunction;
    get: GetFunction;
    lst: any;
}
declare type AddFunction = (key: string, value: any, storeTime: Number) => void;
declare type GetFunction = (key: string) => any;
export {};
