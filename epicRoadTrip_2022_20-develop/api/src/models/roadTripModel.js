const mongoose = require("mongoose")
const constants = require("../utils/constants")

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  steps: [
    {
      name: { type: String },
      coordinates: {
        latitude: { type: Number },
        longitude: { type: Number }
      },
      activities: [
        {
          name: { type: String },
          coordinates: {
            latitude: { type: Number },
            longitude: { type: Number }
          },
          category: {
            type: String,
            enum: constants.CATEGORIES
          },
          photo: { type: String }
        }
      ]
    }
  ],
})

module.exports = mongoose.model("RoadTrip", schema)
