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
  reviews: {
    rating: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  description: { type: String },
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
  website: {
    type: String,
  },
  phone: {
    type: String
  },
  category: {
    type: String,
    default: constants.CATEGORIES.find(c => c === "enjoy").toString()
  }
})

module.exports = mongoose.model("Enjoy", schema)
