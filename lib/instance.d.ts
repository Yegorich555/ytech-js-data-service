import DataServiceOptions from "./dataServiceOptions";
import Storage from './storage';
export default class DataServiceInstance {
    options: DataServiceOptions;
    storage: Storage;
    log: Function;
    http: Function;
}
