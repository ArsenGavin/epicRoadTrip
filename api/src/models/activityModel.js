const mongoose = require("mongoose")
const constants = require("../utils/constants")

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: constants.CATEGORIES,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
  },
  website: {
    type: String,
  },
  apiId: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
})

schema.methods.toPublic = function () {
  return {
    id: this._id,
    category: this.category,
    name: this.name,
    address: this.address,
    latitude: this.latitude,
    longitude: this.longitude,
    website: this.website,
    photo: this.photo,
    apiId: this.apiId,
    description: this.description,
    rating: this.rating,
    rate: this.rate
  }
}

module.exports = mongoose.model("Activity", schema)
