/**
 * Options for dataService
 */
export default class DataServiceOptions {
    httpGet: GetFunction;
    httpDelete: GetFunction;
    httpPost: PostFunction;
    httpPut: PostFunction;
    force: Boolean;
}
declare type GetFunction = (url: String, config?: Object) => Promise<any>;
declare type PostFunction = (url: String, data?: any, config?: Object) => Promise<any>;
export {};
