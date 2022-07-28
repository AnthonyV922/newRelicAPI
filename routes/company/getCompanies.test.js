const request = require('supertest')
const app = require('../../app')


beforeAll(done => {
  done();
})
//const requestWithSuperTest = supertest(getCompanies);

describe("Testing get company path promise", () => {
  test('Should get list of companies',  () => {
    return request(app).get("/companies").then((result) => {
      expect(result.statusCode).toBe(200);
    })
  })
})


