import DataServiceOptions from "./dataServiceOptions";
import RequestOptions from "./requestOptions";
import DataServiceInstance from "./instance";
import Clone from './clone';
class DataService {
    static get(url, config, options) {
        options = Object.assign({}, this.instance.options, options);
        if (options.storeKey && !options.force) {
            let v = this.instance.storage.get(options.storeKey);
            if (v) {
                if ((v.value !== undefined) &&
                    (v.time == null || v.time.valueof() > new Date().valueOf())) {
                    this.instance.log(console.log, `from storage(${options.storeKey})`, 'get', url);
                    return new Promise(resolve => resolve({ data: Clone(v) }));
                }
            }
        }
        return this.instance.http(() => this.instance.options.httpGet(url, config), 'get', options, url, undefined, config);
    }
    static delete(url, config, options) {
        return this.instance.http(() => this.instance.options.httpDelete(url, config), 'delete', options, url, undefined, config);
    }
    static post(url, data, config, options) {
        //todo compare data
        return this.instance.http((data) => this.instance.options.httpPost(url, data, config), 'post', options, url, data, config);
    }
    static put(url, data, config, options) {
        //todo compare data
        return this.instance.http((data) => this.instance.options.httpPut(url, data, config), 'put', options, url, data, config);
    }
    static get storage() {
        return this.instance.storage;
    }
    static get options() {
        return this.instance.options;
    }
    static set options(options) {
        Object.assign(this.instance.options, options);
    }
}
DataService.instance = new DataServiceInstance();
export { DataServiceOptions, DataService, RequestOptions };
export default DataService;
