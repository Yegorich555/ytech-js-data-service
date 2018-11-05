import DataServiceOptions from "./dataServiceOptions"
import RequestOptions from "./requestOptions"
import DataServiceInstance from "./instance"
import Clone from './clone'
import Storage from './storage'

class DataService {
    public static get(url: String, config?: Object, options?: RequestOptions) {
        options = Object.assign({}, this.instance.options, options);

        if (options.storeKey && !options.force) {
            let v = this.instance.storage.get(options.storeKey);
            if (v) {
                if ((v.value !== undefined) &&
                    (v.time == null || v.time.valueof() > new Date().valueOf())
                ) {
                    this.instance.log(console.log, `from storage(${options.storeKey})`, 'get', url);
                    return new Promise(resolve => resolve({ data: Clone(v) }))
                }
            }
        }

        return this.instance.http(() => this.instance.options.httpGet(url, config), 'get', options, url, undefined, config)
            .then((response: any) => {
                let value = options.store(response.data, response, this.instance.storage, this.instance.storage.get(options.storeKey))
                this.instance.storage.set(options.storeKey, value, options.storeTime)
                return response;
            })
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