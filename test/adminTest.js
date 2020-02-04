const chai = require("chai");
// chai.use(require('chai-json-schema'));
// const assert = require("chai").assert;
const jwt = require('jsonwebtoken')
const chaiHttp = require("chai-http");
const app = require("../server")
const expect = chai.expect;

chai.use(chaiHttp);

describe("Admin Routes", () => {
    it('Creates an admin user', done => {
        chai
            .request(app)
            .get('/api/admin')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                // decode the JWT token in res
                // expect payload to contain key 'admin'
                done()
             });        
    })
})
