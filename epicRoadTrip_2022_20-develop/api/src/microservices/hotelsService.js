const dotenv = require("dotenv")
const axios = require("axios").default

dotenv.config()

async function getCityData(query) {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/search",
    params: { query: query, locale: "fr_FR" },
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
    },
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data
}

async function getHotelData(query) {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/properties/list",
    params: {
      destinationId: query.destination,
      pageNumber: query.pagenumber,
      checkIn: query.checkin,
      checkOut: query.checkout,
      pageSize: query.pagesize,
      adults1: query.adults1,
      currency: "EUR",
      locale: "fr_FR",
      sortOrder: "PRICE",
    },
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
    },
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data.data.body
}

module.exports = {
  getCityData,
  getHotelData,
}
