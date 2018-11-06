import DataServiceOptions from "./dataServiceOptions"
import RequestOptions from "./requestOptions"
import DataServiceInstance from "./instance"
import Clone from './clone'
import Storage from './storage'

class DataService {
    public static get(url: String, config?: Object, options?: RequestOptions): Promise<any> {
        options = Object.assign({}, this.instance.options, options);

        if (options.storeKey && !options.force) {
            let v = this.instance.storage.get(options.storeKey);
            if (v) {
                if ((v.value !== undefined) &&
                    (v.time == null || v.time.valueof() > new Date().valueOf())
                ) {
                    this.instance.log(console.log, `from storage(${options.storeKey})`, 'get', url);
                    return new Promise(resolve => resolve({ data: Clone(v.value) }))
                }
            }
        }
        //todo check httpGet is function
        return this.instance.http(() => this.instance.options.httpGet(url, config), 'get', options, url, undefined, config)
    }

    public static delete(url: String, config?: Object, options?: RequestOptions): Promise<any> {
        return this.instance.http(() => this.instance.options.httpDelete(url, config), 'delete', options, url, undefined, config)
    }

    public static post(url: String, data?: Object, config?: Object, options?: RequestOptions): Promise<any> { 
        //todo compare data
        return this.instance.http((data: any) => this.instance.options.httpPost(url, data, config), 'post', options, url, data, config)
    }

    public static put(url: String, data?: Object, config?: Object, options?: RequestOptions): Promise<any> {
        //todo compare data
        return this.instance.http((data: any) => this.instance.options.httpPut(url, data, config), 'put', options, url, data, config)
    }

    static get storage(): Storage {
        return this.instance.storage;
    }

    static get options(): DataServiceOptions {
        return this.instance.options;
    }
    static set options(options: DataServiceOptions) {
        Object.assign(this.instance.options, options);
    }

    static instance: DataServiceInstance = new DataServiceInstance();
}

export {
    DataServiceOptions,
    DataService,
    RequestOptions
}
export default DataService