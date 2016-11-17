"use strict";
var chai_1 = require("chai");
var configuration_service_1 = require("../../app/common/configuration.service");
describe("simple configuration test", function () {
    it("should set msg when an instance is created", function () {
        var expected = "world";
        var config = new configuration_service_1.ConfigurationService("LOCAL");
        chai_1.expect(config.appSettings.apiUrl).eql(expected);
    });
});
