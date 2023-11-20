const dotenv = require("dotenv")
const axios = require("axios").default

dotenv.config()

async function getPlaceData(query) {
  const options = {
    method: "GET",
    url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
    params: {
      input: query.search.replace(/\s+/g, "%20"),
      location: query.latitude + "," + query.longitude,
      radius: query.radius || 5000,
      inputtype: "textquery",
      language: "fr",
      fields: "photos,place_id,user_ratings_total,formatted_address,name,rating,geometry,price_level",
      key: process.env.GOOGLE_API_KEY
    }
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data
}

async function getDirectionData(query) {
  const options = {
    method: "GET",
    url: "https://maps.googleapis.com/maps/api/directions/json",
    params: {
      origin: query.origin,
      destination: query.destination,
      language: "fr",
      units: "metric",
      key: process.env.GOOGLE_API_KEY
    }
  }
  const response = await axios.request(options).catch((error) => {
    throw new Error(error.message || error.toString())
  })
  return response.data
}

module.exports = {
  getPlaceData,
  getDirectionData
}
