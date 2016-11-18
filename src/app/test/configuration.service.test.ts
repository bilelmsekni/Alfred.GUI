import { expect } from "chai";
import "mocha";
import { ConfigurationService } from "../common/configuration.service";

describe("configuration settings loding test", () => {
    it("should return local appsettings when config env is local", () => {
        let expected = "./api/{resource}.fake.json";
        let config = new ConfigurationService("LOCAL");
        expect(config.appSettings.apiUrl).eql(expected);
    });
});
