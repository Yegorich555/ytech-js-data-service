import DataServiceOptions from "./dataServiceOptions";
import RequestOptions from "./requestOptions";
import DataServiceInstance from "./instance";
import Storage from './storage';
declare class DataService {
    static get(url: String, config?: Object, options?: RequestOptions): Promise<any>;
    static delete(url: String, config?: Object, options?: RequestOptions): Promise<any>;
    static post(url: String, data?: Object, config?: Object, options?: RequestOptions): Promise<any>;
    static put(url: String, data?: Object, config?: Object, options?: RequestOptions): Promise<any>;
    static readonly storage: Storage;
    static options: DataServiceOptions;
    static instance: DataServiceInstance;
}
export { DataServiceOptions, DataService, RequestOptions };
export default DataService;
