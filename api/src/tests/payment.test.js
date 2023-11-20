// const chai = require("chai")
// const { expect } = require("chai")
// const chaiHttp = require("chai-http")
// const server = require("../../index")
//
// chai.use(chaiHttp)
//
// describe("Payment Tests", () => {
//   describe("Payment validation", () => {
//     it("should return validated payment details", (done) => {
//       const paymentInfo = {
//         amount: 100,
//         currency: "EUR",
//         payment_method_types: ["card"],
//         receipt_email: "jenny.rosen@example.com",
//       }
//       chai
//         .request(server)
//         .post("/payment/request")
//         .send({ paymentInfo })
//         .end((err, res) => {
//           if (err) return done(err)
//           expect(res.status).to.equal(201)
//           expect(res.body.payment.id).to.exist
//           expect(res.body.payment.amount).to.equal(paymentInfo.amount)
//           done()
//         })
//     })
//
//     it("should return a Stripe session ID", (done) => {
//       chai
//         .request(server)
//         .post("/payment/session")
//         .end((err, res) => {
//           if (err) return done(err)
//           expect(res.status).to.equal(201)
//           expect(res.body.session).to.exist
//           done()
//         })
//     })
//   })
// })
