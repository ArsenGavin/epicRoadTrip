const mongoose = require("mongoose")
const constants = require("../utils/constants")

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  review: {
    rating: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  rate: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  photo: {
    type: String,
  },
  apiId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: constants.CATEGORIES.find(c => c === "drink").toString()
  }
})

module.exports = mongoose.model("Drink", schema)
