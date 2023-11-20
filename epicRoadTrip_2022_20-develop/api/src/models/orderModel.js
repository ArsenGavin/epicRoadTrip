const mongoose = require("mongoose")

let schema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  },
  price: {
    type: Number,
    required: true,
    default: 50
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  session: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Order", schema)