const chai = require("chai")
const { expect } = require("chai")
const chaiHttp = require("chai-http")
const server = require("../../index")

chai.use(chaiHttp)

describe("Travel Tests", () => {
  describe("Travels By Name Tests", () => {
    it("should successfully return infos", (done) => {
      const query = {
        name: "marseille"
      }
      chai
        .request(server)
        .get(`/search/travel/?name=${query.name}`)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body.travel).to.be.an("array")
          expect(res.body.results).to.be.a("number")
          expect(res.body.total).to.be.a("number")
          done()
        })
    })
  })
})
