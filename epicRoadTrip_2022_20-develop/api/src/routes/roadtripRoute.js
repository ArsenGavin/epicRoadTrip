const router = require("express").Router()
const roadtripController = require("../controllers/roadtripController")
const authService = require("../services/authService")

router.get("/", authService.verifyHeader, roadtripController.getRoadtrip)
router.post("/", authService.verifyHeader, roadtripController.createRoadtrip)
router.put("/:id", authService.verifyHeader, roadtripController.updateRoadtrip)
router.delete("/:id", authService.verifyHeader, roadtripController.deleteRoadtrip)

module.exports = router
