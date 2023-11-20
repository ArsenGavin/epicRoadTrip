function pagination(query) {
  if (query.page === undefined || query.limit === undefined) {
    return {
      page: 1,
      limit: 10,
    }
  }
  if (query.page && query.limit) {
    return {
      page: parseInt(query.page),
      limit: parseInt(query.limit),
    }
  }
}

module.exports = pagination
