import DataServiceOptions from "./dataServiceOptions";
import Clone from './clone';
import Storage from './storage';
export default class DataServiceInstance {
    constructor() {
        this.options = new DataServiceOptions();
        this.storage = new Storage();
        this.log = (logFnc, message, fncName, url, ...params) => {
            let consoleStyle1 = 'color: blue!important; font-weight: bold; font-size: larger';
            logFnc(`${message} %chttp.${fncName}(${url.substring(0, 260)})...`, consoleStyle1, ...params);
        };
        this.http = (fnc, fncName, options, url, data, config) => {
            this.log(console.log, 'start', fncName, url, data, config);
            if (data === undefined) //fix for axios
                data = null;
            //todo prepare data //removeNulls
            //todo prepare config
            return fnc(data)
                .then((result) => {
                this.log(console.log, 'load', fncName, url, Clone(result));
                //todo result = parseData(result);
                //storing data if it need
                if (options.storeKey != null && typeof options.store === 'function') {
                    let value = options.store(result && result.data, result, this.storage, this.storage.get(options.storeKey));
                    this.storage.set(options.storeKey, value, options.storeTime);
                }
                return result;
            })
                .catch((ex) => {
                this.log(console.error, 'error', fncName, url, ex.response, ex);
                // let cfg = http.getConfig();
                // cfg.catch && cfg.catch(ex);
                throw ex;
            });
        };
    }
}
