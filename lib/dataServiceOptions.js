/**
 * Options for dataService
 */
export default class DataServiceOptions {
    constructor() {
        this.httpGet = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)
        this.httpDelete = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)
        this.httpPost = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)
        this.httpPut = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)
        this.force = false;
    }
}
