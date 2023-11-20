const Drink = require("../models/drinkModel")
const Eat = require("../models/eatModel")
const Enjoy = require("../models/enjoyModel")
const Sleep = require("../models/sleepModel")
const Travel = require("../models/travelModel")

function convertDrinkService(query) {
  let drinks = []
  try {
    if (query.candidates.length === 0) {
      return {
        drink: drinks,
      }
    }
    query.candidates.forEach((bar) => {
      const drink = new Drink()
      drink.set("name", bar.name)
      drink.set("address", bar.formatted_address)
      drink.set("apiId", bar.place_id)
      drink.set("coordinates.latitude", bar.geometry.location.lat)
      drink.set("coordinates.longitude", bar.geometry.location.lng)
      drink.set("rate", convertPriceLevel(bar.price_level))
      drink.set("review.rating", bar.rating)
      drink.set("review.total", bar.user_ratings_total)
      drink.set("category", "drink")
      if (bar.photos)
        drink.set("photo", bar.photos[0].html_attributions[0].substr(bar.photos[0].html_attributions[0].indexOf("href=\"") + 6,
          bar.photos[0].html_attributions[0].indexOf("\">") - 9))
      drinks.push(drink)
    })
  } catch (error) {
    throw new Error(error.message || error.toString())
  }
  return {
    drink: drinks
  }
}

function convertEatService(query) {
  let eats = []
  try {
    if (query.data.length === 0) {
      return {
        eat: eats,
        results: "0",
        total: "0"
      }
    }
    query.data.forEach((resto) => {
      const eat = new Eat()
      eat.set("name", resto.name)
      eat.set("description", resto.description)
      eat.set("address", resto.address)
      eat.set("apiId", resto.location_id)
      eat.set("coordinates.latitude", resto.latitude)
      eat.set("coordinates.longitude", resto.longitude)
      eat.set("rate", resto.price_level)
      eat.set("review.rating", resto.rating)
      eat.set("review.total", resto.num_reviews)
      eat.set("phone", resto.phone)
      eat.set("category", "eat")
      if (resto.photo)
        eat.set("photo", resto.photo.images.original.url)
      if (resto.website)
        eat.set("website", resto.website)
      eats.push(eat)
    })
  } catch (error) {
    throw new Error(error.message || error.toString())
  }
  return {
    eat: eats,
    results: query.paging.results,
    total: query.paging.total_results
  }
}

function convertEnjoyService(query) {
  let enjoys = []
  try {
    if (query.data.length === 0) {
      return {
        enjoy: enjoys,
        results: "0",
        total: "0"
      }
    }
    query.data.forEach((attraction) => {
      const enjoy = new Enjoy()
      enjoy.set("name", attraction.name)
      enjoy.set("description", attraction.description)
      enjoy.set("address", attraction.address)
      enjoy.set("apiId", attraction.location_id)
      enjoy.set("coordinates.latitude", attraction.latitude)
      enjoy.set("coordinates.longitude", attraction.longitude)
      enjoy.set("review.rating", attraction.rating)
      enjoy.set("review.total", attraction.num_reviews)
      enjoy.set("phone", attraction.phone)
      enjoy.set("category", "enjoy")
      if (attraction.photo)
        enjoy.set("photo", attraction.photo.images.original.url)
      if (attraction.website)
        enjoy.set("website", attraction.website)
      enjoys.push(enjoy)
    })
  } catch (error) {
    throw new Error(error.message || error.toString())
  }
  return {
    enjoy: enjoys,
    results: query.paging.results,
    total: query.paging.total_results
  }
}

function convertSleepService(query) {
  let sleeps = []
  try {
    if (query.data.length === 0) {
      return {
        sleep: sleeps,
        results: "0",
        total: "0"
      }
    }
    query.data.forEach((hotel) => {
      const sleep = new Sleep()
      sleep.set("name", hotel.name)
      if (hotel.description)
        sleep.set("description", hotel.description)
      if (hotel.address)
        sleep.set("address", hotel.address)
      sleep.set("apiId", hotel.apiId)
      sleep.set("coordinates.latitude", hotel.latitude)
      sleep.set("coordinates.longitude", hotel.longitude)
      sleep.set("rate", hotel.price)
      sleep.set("review.rating", hotel.rating)
      sleep.set("review.total", hotel.num_reviews)
      sleep.set("phone", hotel.phone)
      if (hotel.photo)
        sleep.set("photo", hotel.photo.images.original.url)
      if (hotel.website)
        sleep.set("website", hotel.website)
      sleep.set("category", "sleep")
      sleeps.push(sleep)
    })
  } catch (error) {
    throw new Error(error.message || error.toString())
  }
  return {
    sleep: sleeps,
    results: query.paging.results,
    total: query.paging.total_results
  }
}

function convertTravelService(query) {
  let travels = []
  try {
    if (query.length === 0) {
      return {
        travel: travels,
        results: "0",
        total: "0"
      }
    }
    query.forEach((destination) => {
      const travel = new Travel()
      travel.set("destination", destination.destination)
      travel.set("apiId", destination.location_id)
      travel.set("name", destination.name)
      travel.set("coordinates.latitude", destination.latitude)
      travel.set("coordinates.longitude", destination.longitude)
      travel.set("category", "travel")
      travels.push(travel)
    })
  } catch (error) {
    throw new Error(error.message || error.toString())
  }
  return {
    travel: travels,
    results: query.length,
    total: query.length
  }
}

function convertPriceLevel(price) {
  switch (price) {
  case 0:
    return "€"
  case 1:
    return "€"
  case 2: 
    return "€€"
  case 3:
    return "€€€"
  case 4: 
    return "€€€"
  default:
    return "€"
  }
}

module.exports = {
  convertDrinkService,
  convertEatService,
  convertEnjoyService,
  convertSleepService,
  convertTravelService
}