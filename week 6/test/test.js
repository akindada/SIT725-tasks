var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers - Valid Input", function () {
  var url = "http://localhost:8000/addTwoNumbers/3/5";

  it("should return status 200 if API works", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return statusCode 200 in body", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the result as a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  it("should return the result equal to 8", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(8);
      done();
    });
  });

  it("should not return the result equal to 15", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(15);
      done();
    });
  });
});

describe("Add Two Numbers - Invalid Input", function () {
  var url = "http://localhost:8000/addTwoNumbers/a/b";

  it("should return status 400 for invalid input", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(400);
      done();
    });
  });

  it("should return result as null for invalid input", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.null;
      done();
    });
  });
});
