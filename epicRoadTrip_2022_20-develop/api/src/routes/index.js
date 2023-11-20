const router = require("express").Router()

router.use("/users", require("./userRoute"))
router.use("/search", require("./searchRoute"))
router.use("/payment", require("./paymentRoute"))
router.use("/roadtrips", require("./roadtripRoute"))
router.use("/activities", require("./activityRoute"))

router.get("/", (req, res) => {
  res.status(302).redirect("/swagger")
})

module.exports = router
