const paymentService = require("../services/paymentService")

async function createSession(req, res) {
  try {
    const { cart } = req.body
    const session = await paymentService.checkoutSession(cart)
    res.status(201).send({ session })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function sendPayment(req, res) {
  try {
    const paymentInfo = req.body.paymentInfo
    const payment = await paymentService.paymentIntent(paymentInfo)
    res.status(201).send({ payment })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  createSession,
  sendPayment,
}
