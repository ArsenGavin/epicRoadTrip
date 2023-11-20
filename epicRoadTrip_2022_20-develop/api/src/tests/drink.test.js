const chai = require("chai")
const { expect } = require("chai")
const chaiHttp = require("chai-http")
const server = require("../../index")

chai.use(chaiHttp)

describe("Drink Tests", () => {
  describe("Places API (DRINK)", () => {
    it("should successfully return places", (done) => {
      const search = {
        latitude: "48.860245",
        longitude: "2.332743",
      }
      chai
        .request(server)
        .get(`/search/drink/?search=bar&latitude=${search.latitude}&longitude=${search.longitude}&radius=2000`)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body.drink).to.be.an("array")
          done()
        })
    })
  })
})
