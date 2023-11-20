const mongoose = require("mongoose")
const constants = require("../utils/constants")

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: { type: String },
  reviews: {
    rating: { type: Number },
    total: { type: Number },
  },
  rate: { type: Number },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  photo: { type: String },
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
  description: {
    type: String
  },
  category: {
    type: String,
    default: constants.CATEGORIES.find(c => c === "sleep").toString()
  }
})

module.exports = mongoose.model("Sleep", schema)
