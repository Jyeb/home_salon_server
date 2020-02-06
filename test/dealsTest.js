const chai = require("chai");
// chai.use(require('chai-json-schema'));
// const assert = require("chai").assert;
const jwt = require("jsonwebtoken");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
const {DealModel} = require('../models/deals')


chai.use(chaiHttp);

describe("Deals Routes", () => {
    it("Number of Deals recieved matches deals in database", done => {
        chai
        .request(app)
        .get("/api/deal")
        .end(function(err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // Get deals from db and expect the length to be the same as the deals returned in res
            expect(res.body.length).to.be.equal(1)
            done()
        });
    });
    it("Update a deal", done => {
        chai
        .request(app)
        .get("/api/deal")
        .end(function(err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done()
        });
    });
});
