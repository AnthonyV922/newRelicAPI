const request = require('supertest')
const app = require('../../app')


beforeAll(done => {
  done();
})
//const requestWithSuperTest = supertest(getCompanies);

describe("Testing get customers path promise", () => {
  test('Should get list of customers',  () => {
    return request(app).get("/customers").then((result) => {
      expect(result.statusCode).toBe(200);
    })
  })
})


