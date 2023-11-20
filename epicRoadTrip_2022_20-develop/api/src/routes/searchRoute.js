const router = require("express").Router()
const searchController = require("../controllers/searchController")

router.get(
  "/hotels/:destination&:pagenumber&:checkin&:checkout&:pagesize&:adults1",
  searchController.getHotelsInfo
)
router.get("/drink", searchController.getPlacesInfo)
router.get("/enjoy", searchController.getAttractionsByCoordinates)
router.get("/sleep", searchController.getHotelsByCoordinates)
router.get("/eat", searchController.getRestaurantsByCoordinates)
router.get("/travel", searchController.getTravelsByName)

module.exports = router
