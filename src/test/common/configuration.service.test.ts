import { expect } from "chai";
import { ConfigurationService } from "../../app/common/configuration.service";

describe("simple configuration test", () => {
    it("should set msg when an instance is created", () => {
        let expected = "world";
        let config = new ConfigurationService("LOCAL");
        expect(config.appSettings.apiUrl).eql(expected);
    });
});
