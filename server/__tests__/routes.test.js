global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const { app } = require("../index");
const request = require("supertest");

describe("Item get routes", () => {
  test("getItems should get all items and return status 200", done => {
    request(app)
    .get('/items')
    .expect('Content-Type', /application\/json/)
    .expect(200, done);
  });

  test("getItem should get specific items and return status 200", done => {
    request(app)
    .get('/items/61b72114b3c622f0ae3bdf3b')
    .expect('Content-Type', /application\/json/)
    .expect(200, done);
  });
});
