const searchRepository = require("../repositories/searchRepository")
const convertService = require("../services/convertService")

async function getPlacesInfo(req, res) {
  try {
    const result = await searchRepository.getPlacesByQuery(req.query)
    const drink = convertService.convertDrinkService(result)
    res.status(200).json(drink)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getHotelsInfo(req, res) {
  try {
    const result = await searchRepository.getHotelDataByPlace(req.params)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getHotelsByCoordinates(req, res) {
  try {
    const result = await searchRepository.getHotelsByCoordinates(req.query)
    const hotel = convertService.convertSleepService(result)
    res.status(200).json(hotel)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getRestaurantsByCoordinates(req, res) {
  try {
    const result = await searchRepository.getRestaurantsByCoordinates(req.query)
    const eat = convertService.convertEatService(result)
    res.status(200).json(eat)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getAttractionsByCoordinates(req, res) {
  try {
    const result = await searchRepository.getAttractionsByCoordinates(req.query)
    const enjoy = convertService.convertEnjoyService(result)
    res.status(200).json(enjoy)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getTravelsByName(req, res) {
  try {
    const result = await searchRepository.getTravelsByName(req.query)
    const travel = convertService.convertTravelService(result)
    res.status(200).json(travel)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getPlacesInfo,
  getHotelsInfo,
  getHotelsByCoordinates,
  getRestaurantsByCoordinates,
  getAttractionsByCoordinates,
  getTravelsByName
}
