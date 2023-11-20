const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

function generateToken(user) {
  return jwt.sign({ user: user }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  })
}

function verifyToken(token) {
  const userDecoded = jwt.verify(token, process.env.SECRET_KEY)
  return userDecoded.user.id
}

module.exports = {
  generateToken,
  verifyToken,
}
