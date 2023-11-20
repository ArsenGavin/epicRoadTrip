const dotenv = require("dotenv")
const axios = require("axios").default
dotenv.config()

async function getHotelsByCoordinates(query) {
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
    params: {
      latitude: query.latitude,
      longitude: query.longitude,
      limit: query.limit || 10,
      adults: query.adults || 1,
      rooms: query.rooms || 1,
      checkIn: query.checkIn,
      nights: query.nights || 1,
      hotel_class: "1,2,3",
      lang: "fr_FR",
      currency: "EUR",
      // amenities: "beach,bar_lounge,airport_transportation",
      zff: "4,6"
    },
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      useQueryString: true,
    },
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data
}

async function getRestaurantsByCoordinates(query) {
  const parameters = {
    latitude: query.latitude,
    longitude: query.longitude,
    limit: query.limit || 10,
    currency: "EUR",
    distance: query.distance || 2,
    min_rating: query.rating,
    open_now: "false",
    lunit: "km",
    lang: "fr_FR",
  }
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
    params: parameters,
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    },
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data
}

async function getAttractionsByCoordinates(query) {
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng",
    params: {
      latitude: query.latitude,
      longitude: query.longitude,
      limit: query.limit || 10,
      distance: query.distance || 2,
      lunit: "km",
      lang: "fr_FR",
      currency: "EUR"
    },
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    },
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data
}

async function getTravelsByName(query) {
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/airports/search",
    params: {
      query: query.name,
      locale: "fr_FR"
    },
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    },
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data
}

module.exports = {
  getHotelsByCoordinates,
  getRestaurantsByCoordinates,
  getAttractionsByCoordinates,
  getTravelsByName
}
