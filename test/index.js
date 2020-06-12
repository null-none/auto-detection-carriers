var should = require("chai").should(),
  lib = require("../carriers");

describe("check track codes", function () {
  it("ups", function () {
    lib.getCarrier("1ZE307F90300947572").should.equal("ups");
  });
  it("fedex", function () {
    lib.getCarrier("449044304137821").should.equal("fedex");
  });
  it("dhl", function () {
    lib.getCarrier("7070000000").should.equal("dhl");
  });
});
