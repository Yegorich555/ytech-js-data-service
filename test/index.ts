import * as assert from 'assert' //npm i -g assert
import DataService, { DataServiceOptions, RequestOptions } from '../src/dataService'

describe('ts', () => {
    describe('check get()', () => {
        let dsOptions = new DataServiceOptions();
        dsOptions.httpGet = (url, config) => new Promise(resolve => resolve({ url, config, data: 321 }))
        DataService.options = dsOptions;

        let testObj = { url: 'testUrl', config: { some: 's' }, data: 321 }

        let getOptions = new RequestOptions();
        getOptions.storeKey = 'user';

        it('storing data by default', async () => {
            const response = await DataService.get(testObj.url, testObj.config, getOptions);
            var ok = response.url === testObj.url && response.config === testObj.config && response.data === testObj.data;
            assert.strictEqual(true, ok, 'response data is changed');
            assert.strictEqual(321, DataService.storage.get(getOptions.storeKey).value, 'error in storing data');
            
            let dsOpt = new DataServiceOptions();
            dsOpt.httpGet = _ => new Promise(resolve => resolve({ data: 3 }));
            DataService.options = dsOpt;
            const res = await DataService.get(testObj.url, testObj.config, getOptions);
            assert.strictEqual(321, res.data, 'error in taking stored data');
        })
    });
});
