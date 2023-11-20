const userRepository = require("../repositories/userRepository")
const bcryptService = require("../services/bcryptService")
const jwtService = require("../services/jwtService")

async function login(req, res) {
  try {
    let query = {}
    const { email, password } = req.body
    query.email = email
    const user = await userRepository.getUserByQuery(query)
    const isPasswordMatch = bcryptService.comparePassword(
      password,
      user.password
    )
    if (!isPasswordMatch) {
      return res.status(401).send({ error: "Invalid email or password" })
    }
    const authToken = jwtService.generateToken(user.toPublic())
    return res.status(200).send({
      authorization: authToken,
    })
  } catch (error) {
    res.status(401).send(error.message)
  }
}

async function getUsers(req, res) {
  try {
    const { users, totalPages, currentPage } = await userRepository.getUsers(
      req.query
    )
    res.status(200).json({
      users,
      totalPages,
      currentPage,
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createUser(req, res) {
  try {
    const { user } = req.body
    if (user.password) {
      user.password = bcryptService.hashPassword(user.password)
    }
    await userRepository.createUser(user)
    res.status(201).send({ success: true })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    const user = await userRepository.updateUser(req.params.id, req.body.query)
    res.status(200).send(user.toPublic())
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deleteUser(req, res) {
  try {
    const deletedUser = await userRepository.deleteUser(req.params.id)
    if (!deletedUser) {
      return res.status(500).send("User with id: " + req.params.id + " could not be found")
    }
    res.status(200).send()
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function facebookLogin(req, res) {
  try {
    let query = {}
    const { email, name, id } = req.body
    query.email = email
    let user = await userRepository.getUserByFacebookOrGoogle(query)
    if (!user) {
      const userToCreate = {
        email: email,
        login: name,
        isAdmin: false,
        registrationDate: Date.now(),
        providers: {
          facebookId: id,
        },
      }
      user = await userRepository.createUser(userToCreate)
    }
    const authToken = jwtService.generateToken(user.toPublic())
    return res.status(200).json({
      authorization: authToken,
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function googleLogin(req, res) {
  try {
    let query = {}
    const { email, name, id } = req.body
    query.email = email
    let user = await userRepository.getUserByFacebookOrGoogle(query)
    if (!user) {
      const userToCreate = {
        email: email,
        login: name,
        isAdmin: false,
        registrationDate: Date.now(),
        providers: {
          googleId: id,
        },
      }
      user = await userRepository.createUser(userToCreate)
    }
    const authToken = jwtService.generateToken(user.toPublic())
    return res.status(200).json({
      authorization: authToken,
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateFavorites(req, res) {
  try {
    const user = await userRepository.updateFavorites(
      req.params.id,
      req.body.activity,
      req.body.direction
    )
    res.status(200).send(user.favoris)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  login,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  facebookLogin,
  googleLogin,
  updateFavorites
}
