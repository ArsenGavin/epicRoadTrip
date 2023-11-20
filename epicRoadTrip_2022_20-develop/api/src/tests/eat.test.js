const chai = require("chai")
const { expect } = require("chai")
const chaiHttp = require("chai-http")
const server = require("../../index")

chai.use(chaiHttp)

describe("Eat Tests", () => {
  describe("Restaurants By LatLng Tests", () => {
    it("should successfully return infos", (done) => {
      const query = {
        longitude: "2.292394870272734",
        latitude: "48.96397680489752",
      }
      chai
        .request(server)
        .get(`/search/eat/?latitude=${query.latitude}&longitude=${query.longitude}&limit=1&distance=2`)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body.eat).to.be.an("array")
          expect(res.body.results).to.be.a("string")
          expect(res.body.total).to.be.a("string")
          done()
        })
    })
  })
})
