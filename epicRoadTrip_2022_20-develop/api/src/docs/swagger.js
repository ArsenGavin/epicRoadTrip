const options = {
  swaggerDefinition: {
    info: {
      description: "Epic Road Trip Swagger documentation.",
      title: "Epic Road Trip Swagger Doc",
      version: "1.0.0",
    },
    host: "localhost:3500",
    basePath: "/api-docs",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "authHeader",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
  },
  basedir: __dirname,
  files: ["../controllers/*.js", "../models/*.js"], 
}

module.exports = options
