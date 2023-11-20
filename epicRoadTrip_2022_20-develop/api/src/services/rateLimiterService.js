const rateLimit = require("express-rate-limit")

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "Un trop grand nombre de comptes ont été créé depuis cette adresse IP",
})


const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: "Un trop grand nombre de tentatives de connexion a échoué. Veuillez réessayer dans 15 minutes.",
})

module.exports = {
  createAccountLimiter,
  loginLimiter,
}
