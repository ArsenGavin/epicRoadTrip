const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const endpoints = require("../routes")
const options = require("../docs/swagger")
const server = express()
const swagger = require("express-swagger-generator")(server)

const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require("../docs/swagger.json")

swagger(options)

server.use(express.json({ limit: "50mb" }))
server.use(cors())
server.use(bodyParser.json())
server.use("/", endpoints)
server.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

module.exports = server
