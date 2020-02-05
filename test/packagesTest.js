const chai = require("chai");
// chai.use(require('chai-json-schema'));
// const assert = require("chai").assert;
const jwt = require("jsonwebtoken");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
const { PackageModel } = require("../models/packages");

chai.use(chaiHttp);

describe("Packages Routes", () => {
  it("Number of Packages recieved matches packages in database", done => {
    chai
      .request(app)
      .get("/api/package")
      .end(async function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        // Get packages from db and expect the length to be the same as the packages returned in res
        const count = await PackageModel.countDocuments();
        expect(res.body.length).to.equal(count);
        done();
      });
  });
  it("Should Update a package by package id", done => {
    let package = new PackageModel({
      packageName: "Test Package 2",
      price: 220,
      services: ["Baliage", "Toner"]
    });
    package.save((err, package) => {
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

          // Request package update
          chai
            .request(app)
            .patch("/api/package/" + package._id)
            .set("x-auth-token", token)
            .send({
              //   packageName: "Test Package 2",
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
