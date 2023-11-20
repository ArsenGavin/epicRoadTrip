const googleService = require("../microservices/googleService")
const hotelsService = require("../microservices/hotelsService")
const travelService = require("../microservices/travelService")

async function getPlacesByQuery(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return googleService.getPlaceData(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getPlaceDataByQuery(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return hotelsService.getCityData(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getHotelDataByPlace(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return hotelsService.getHotelData(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getHotelsByCoordinates(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return await travelService.getHotelsByCoordinates(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getAttractionsByCoordinates(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return await travelService.getAttractionsByCoordinates(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getRestaurantsByCoordinates(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return await travelService.getRestaurantsByCoordinates(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getTravelsByName(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return await travelService.getTravelsByName(query)
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getPlacesByQuery,
  getPlaceDataByQuery,
  getHotelDataByPlace,
  getAttractionsByCoordinates,
  getHotelsByCoordinates,
  getRestaurantsByCoordinates,
  getTravelsByName
}
