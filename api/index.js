const server = require("./src/config/server");
const dotenv = require("dotenv");
require("./src/config/database");

dotenv.config();

const PORT = process.env.PORT || 3500;

server
  .listen(PORT, () => {
    console.log(`Epic Road Trip API is running on port: ${PORT}`);
  })
  .on("error", function (err) {
    console.log("*** MongoDB Database Error ***");
    console.log(err);
  });

module.exports = server;