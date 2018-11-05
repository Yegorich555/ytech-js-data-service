import DataServiceOptions from "./dataServiceOptions"
import Clone from './clone'
import { RequestOptions } from "./dataService"
import Storage from './storage'

export default class DataServiceInstance {
    options: DataServiceOptions = new DataServiceOptions();
    storage: Storage = new Storage();
    log: Function = (logFnc: Function, message: String, fncName: String, url: String, ...params: any) => {
        let consoleStyle1 = 'color: blue!important; font-weight: bold; font-size: larger'
        logFnc(`${message} %chttp.${fncName}(${url.substring(0, 260)})...`, consoleStyle1, ...params)
    };
    http: Function = (fnc: Function, fncName: String, options: RequestOptions, url: String, data?: Object, config?: Object) => {
        this.log(console.log, 'start', fncName, url, data, config);

        if (data === undefined) //fix for axios
            data = null
        //todo prepare data //removeNulls
        //todo prepare config
        return fnc(data)
            .then((result: any) => {
                this.log(console.log, 'load', fncName, url, Clone(result))
                //todo result = parseData(result);
                return result
            })
            .catch((ex: any) => {
                this.log(console.error, 'error', fncName, url, ex.response, ex)
                // let cfg = http.getConfig();
                // cfg.catch && cfg.catch(ex);
                throw ex
            })
    }
}