const router = require("express").Router()
const userController = require("../controllers/userController")
const rateLimiterService = require("../services/rateLimiterService")
const authService = require("../services/authService")

router.get("/", userController.getUsers)
router.post("/login", rateLimiterService.loginLimiter, userController.login)
router.post("/", rateLimiterService.createAccountLimiter, userController.createUser)
router.put("/:id", authService.verifyHeader, userController.updateUser)
router.put("/:id/favorites", authService.verifyHeader, userController.updateFavorites)
router.delete("/:id", authService.verifyHeader, userController.deleteUser)
router.post("/facebook", userController.facebookLogin)
router.post("/google", userController.googleLogin)

module.exports = router
