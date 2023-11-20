const chai = require("chai")
const { expect } = require("chai")
const chaiHttp = require("chai-http")
const server = require("../../index")

chai.use(chaiHttp)

describe("Swagger Tests", () => {
  describe("should render Swagger API Doc", () => {
    it("should successfully render the page", (done) => {
      chai
        .request(server)
        .get("/swagger")
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          done()
        })
    })
  })
})
