const userModel = require("../models/userModel")
const specification = require("../specification/userSpecification")
const paginationSpecification = require("../specification/paginationSpecification")
const bcryptService = require("../services/bcryptService")

async function getUserByQuery(query) {
  if (!query) throw new Error("Query is missing")
  try {
    const user = await userModel
      .findOne(specification.queryFilter(query))
      .populate("favoris", "_id name category address latitude longitude description photo website apiId rating rate")
      // .populate("order", "_id")
      .exec()
    if (!user) throw new Error("User does not exist")
    return user
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getUserByFacebookOrGoogle(query) {
  if (!query) throw new Error("Query is missing")
  try {
    return await userModel.findOne(specification.queryFilter(query)).exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getUserById(id) {
  if (!id) throw new Error("User id is missing")
  try {
    const user = await userModel.findById(id)
      .populate("activity ").exec()
    if (!user) throw new Error("User does not exist")
    return user
  } catch (error) {
    throw new Error(error.message)
  }
}

async function getUsers(query) {
  try {
    const pagination = paginationSpecification(query)
    const usersDb = await userModel
      .find()
      .skip((pagination.page - 1) * pagination.limit)
      .limit(pagination.limit)
      .exec()
    let users = []
    usersDb.forEach((user) => users.push(user.toPublic()))
    const count = await userModel.countDocuments()
    return {
      users,
      totalPages: Math.ceil(count / pagination.limit),
      currentPage: pagination.page,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

async function createUser(user) {
  if (!user) throw new Error("User is missing")
  try {
    return await userModel.create(user)
  } catch (error) {
    throw new Error(error.message)
  }
}

async function updateUser(id, query) {
  if (!id || !query) throw new Error("User id or user attributes are missing")
  try {
    if (query.password) {
      query.password = bcryptService.hashPassword(query.password)
    }
    return await userModel
      .findByIdAndUpdate(id, query, { new: true, omitUndefined: true})
      .exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

async function deleteUser(id) {
  if (!id) throw new Error("User id is missing")
  try {
    return await userModel.findByIdAndDelete(id).exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

async function updateFavorites(userId, activity, direction) {
  if (!userId || !activity || !direction) throw new Error("User id, activity id or direction is missing")
  try {
    return await userModel.findByIdAndUpdate(
      userId,
      specification.handleFavorite(activity, direction),
      specification.newObject
    )
      // .populate("favoris", "_id name category address latitude longitude description photo website apiId rating rate")
      .exec()
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getUserByQuery,
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserByFacebookOrGoogle,
  updateFavorites,
}
