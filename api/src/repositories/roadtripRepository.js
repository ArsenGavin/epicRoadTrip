const roadtripModel = require("../models/roadTripModel")

async function createRoadTrip(query) {
  if (!query) throw new Error("Roadtrip is missing")
  try {
    return await roadtripModel.create(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getRoadTrip(query) {
  if (!query) throw new Error("Roadtrip is missing")
  try {
    return await roadtripModel.find({
      "user": query.user
    }).exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

async function updateRoadTrip(id, query) {
  if (!id || !query) throw new Error("Roadtrip or id is missing")
  try {
    return await roadtripModel.findByIdAndUpdate(id).exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

async function deleteRoadTrip(id) {
  if (!id) throw new Error("Roadtrip id is missing")
  try {
    return await roadtripModel.findByIdAndDelete(id).exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  createRoadTrip,
  getRoadTrip,
  updateRoadTrip,
  deleteRoadTrip
}