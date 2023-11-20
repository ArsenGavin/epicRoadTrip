const userRepository = require("../repositories/userRepository")
const jwtService = require("../services/jwtService")

async function verifyHeader(req, res, next) {
  if (!req.headers["authorization"]) {
    return res.status(400).send("Token is missing")
  }
  try {
    const user = await userRepository.getUserById(
      jwtService.verifyToken(req.headers["authorization"])
    )
    if (!user) {
      return res.status(401).send("Could not verify token")
    }
    next()
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  verifyHeader
}