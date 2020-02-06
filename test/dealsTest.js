const chai = require("chai");
// chai.use(require('chai-json-schema'));
// const assert = require("chai").assert;
const jwt = require("jsonwebtoken");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
const { DealModel } = require("../models/deals");

chai.use(chaiHttp);

describe("Deals Routes", () => {
  it("Number of Deals recieved matches deals in database", done => {
    chai
      .request(app)
      .get("/api/deal")
      .end(async function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        // Get deals from db and expect the length to be the same as the deals returned in res
        const count = await DealModel.countDocuments();
        expect(res.body.length).to.equal(count);
        done();
      });
  });
  it("Should Update a deal by deal id", done => {
    let deal = new DealModel({
      dealname: "Test Deal 2",
      price: 220,
      services: ["Baliage", "Toner"]
    });
    deal.save((err, deal) => {
      // Login
      chai
        .request(app)
        .post("/api/login")
        .send({
          name: "Maxine",
          password: "philharper1"
        })
        .end((err, res) => {
          // Logged in successfully
          const token = res.body.token;

          // Request deal update
          chai
            .request(app)
            .patch("/api/deal/" + deal._id)
            .set("x-auth-token", token)
            .send({
              //   dealName: "Test Deal 2",
              price: 200
              //   services: ["Baliage", "Toner"]
            })
            .end((err, res) => {
                // console.log(res.body)
              expect(res).to.have.status(200);
              expect(res.body).to.be.a("object");
              expect(res.body)
                .to.have.property("price")
                .eq(200);
              done();
            });
        });
    });
  });
});
