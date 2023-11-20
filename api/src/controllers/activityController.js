const activityRepository = require("../repositories/activityRepository")

async function getActivities(req, res) {
  try {
    const activities = await activityRepository.getActivities()
    res.status(200).send({ activities })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getActivities
}