const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const mongoDbString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@epicroadtrip.yxyzx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(mongoDbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

mongoose.connection.on("error", (error) => {
  console.log("*** MongoDB Connection Error ***")
  console.error(error)
})

mongoose.connection.on("open", () => {
  console.log("Connection to MongoDB database is established...")
})
