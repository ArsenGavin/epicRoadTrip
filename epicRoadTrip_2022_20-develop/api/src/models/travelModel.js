const mongoose = require("mongoose")
const constants = require("../utils/constants")

const schema = new mongoose.Schema({
  destination: {
    type: String,
  },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  name: { type: String },
  apiId: { type: String },
  category: {
    type: String,
    default: constants.CATEGORIES.find(c => c === "travel").toString()
  }
})

module.exports = mongoose.model("Travel", schema)
