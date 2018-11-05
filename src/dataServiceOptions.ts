/**
 * Options for dataService
 */
export default class DataServiceOptions {
    public httpGet: GetFunction = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)
    public httpDelete: GetFunction = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)
    public httpPost: PostFunction = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)
    public httpPut: PostFunction = (url) => new Promise(resolve => resolve(url)); //axios.get(url, config)

    public force: Boolean = false;
}

type GetFunction = (url: String, config?: Object) => Promise<any>;
type PostFunction = (url: String, data?: any, config?: Object) => Promise<any>;