const roadtripRepository = require("../repositories/roadtripRepository")

async function createRoadtrip(req, res) {
  try {
    const { roadtrip } = req.body
    const result = await roadtripRepository.createRoadTrip(roadtrip)
    return res.status(201).send({ roadtrip: result })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getRoadtrip(req, res) {
  try {
    const result = await roadtripRepository.getRoadTrip(req.query)
    res.status(200).json(result)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateRoadtrip(req, res) {
  try {
    return await roadtripRepository.updateRoadTrip(req.params.id, req.body.roadtrip)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteRoadtrip(req, res) {
  try {
    const deletedRoadtrip = await roadtripRepository.deleteRoadTrip(req.params.id)
    if (!deletedRoadtrip) {
      return res.send(500).send("Roadtrip with id: " + req.params.id + " could not be found")
    }
    return res.status(200).send()
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRoadtrip,
  getRoadtrip,
  updateRoadtrip,
  deleteRoadtrip
}