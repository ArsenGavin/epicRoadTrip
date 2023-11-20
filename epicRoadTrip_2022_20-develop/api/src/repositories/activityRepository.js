const activityModel = require("../models/activityModel")

async function getActivities() {
  try {
    return await activityModel.find().exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getActivities
}