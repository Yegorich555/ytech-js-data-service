import DataService, { RequestOptions, DataServiceOptions } from "../src/dataService";

console.warn('Hello');

let gloOptions = new DataServiceOptions();
//gloOptions.httpGet = (url, config) => {}
//gloOptions.httpDelete = (url, config) => {}
//gloOptions.httpPost = (url, data, config) => {}
//gloOptions.httpPut = (url, data, config) => {}

DataService.options = gloOptions;


let options = new RequestOptions();
options.storeKey = 'user';
options.store = (data, _response, _storage, _storedValue) => data;
options.storeTime = 0;

export const getCurrentUser = () =>
    DataService.get('api/user', null, options);

export const delCurrentUser = () => //del
    DataService.del('api/user', null, {
        force: true,
        storeKey: 'user',
        store: _ => undefined // storeVal.id = 0;
    });

getCurrentUser();