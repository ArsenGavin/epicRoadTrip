const orderModel = require("../models/orderModel")

async function createOrder(order) {
  if (!order) throw new Error("Order is missing")
  try {
    return await orderModel.create(order)
  } catch (error) {
    throw new Error(error.message || error.toString())
  }
}

async function getOrdersByUserId(id) {
  if (!id) throw new Error("User ID is missing")
  try {
    return await orderModel.findById(id).exec()
  } catch (error) {
    throw new Error(error.message || error.toString())
  }
}

module.exports = {
  createOrder,
  getOrdersByUserId
}