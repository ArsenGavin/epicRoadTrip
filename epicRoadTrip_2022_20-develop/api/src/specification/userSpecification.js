const constants = require("../utils/constants")

function queryFilter(query) {
  const isLogin = query.login ? { login: query.login } : ""
  const isEmail = query.email ? { email: query.email } : ""
  const isGoogleId = query.googleId
    ? { "providers.googleId": query.googleId }
    : ""
  const isFacebookId = query.facebookId
    ? { "providers.facebookId": query.facebookId }
    : ""

  return { ...isLogin, ...isEmail, ...isGoogleId, ...isFacebookId }
}

function handleFavorite(activity, direction) {
  if (direction === constants.ADD_FAVORI) {
    return {
      $addToSet: { favoris: activity }
    }
  }
  if (direction === constants.REMOVE_FAVORI) {
    return {
      $pull: { favoris: { "_id": activity._id } }
    }
  }
}

function newObject() {
  return {
    new: true
  }
}

module.exports = {
  queryFilter,
  handleFavorite,
  newObject
}
