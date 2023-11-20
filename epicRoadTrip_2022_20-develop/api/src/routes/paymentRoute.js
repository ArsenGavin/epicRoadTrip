const router = require("express").Router()
const paymentController = require("../controllers/paymentController")

router.post("/request", paymentController.sendPayment)
router.post("/session", paymentController.createSession)

module.exports = router
