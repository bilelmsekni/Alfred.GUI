import { expect } from 'chai';
import { ConfigurationService } from '../common/services';

describe('configuration settings loading tests', function () {
    let tests: any[] = [
        {
            apiUrl: './api/{resource}.fake.json',
            env: 'LOCAL'
        },
        {
            apiUrl: 'http://localhost:50405/{resource}',
            env: 'DEV'
        },
        {
            apiUrl: 'http://someServer:50405/{resource}',
            env: 'PRD'
        }
    ];
    tests.forEach(function (test) {
        it('should return ' + test.apiUrl + ' when config env is ' + test.env, function () {
            let config = new ConfigurationService(test.env);
            expect(config.appSettings.apiUrl).eql(test.apiUrl);
        });
    });
});
