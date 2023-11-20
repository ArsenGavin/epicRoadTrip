const mongoose = require("mongoose")
const constants = require("../utils/constants")

let schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  login: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    default: undefined,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  registrationDate: {
    type: Date,
    default: Date.now(),
  },
  providers: {
    googleId: {
      type: String,
      default: undefined,
    },
    facebookId: {
      type: String,
      default: undefined,
    },
  },
  roadtrips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoadTrip",
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  }],
  favoris: [{
    category: { type: String, enum: constants.CATEGORIES, required: true },
    name: { type: String, required: true },
    address: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    website: { type: String },
    photo: { type: String },
    apiId: { type: String },
    description: {type: String },
    rating: { type: String },
    rate: {type: String }
  }],
})

schema.methods.toPublic = function () {
  let favorites = []
  this.favoris.map((favori) => {
    const fav = {
      id: favori._id,
      category: favori.category,
      name: favori.name,
      latitude: favori.latitude,
      longitude: favori.longitude,
      website: favori.website,
      photo: favori.photo,
      apiId: favori.apiId,
      description: favori.description,
      rating: favori.rating,
      rate: favori.rate
    }
    favorites.push(fav)
  })
  return {
    id: this._id,
    email: this.email,
    login: this.login,
    registrationDate: this.registrationDate,
    roadtrips: this.roadtrips,
    orders: this.orders,
    favoris: favorites
  }
}

module.exports = mongoose.model("User", schema)
