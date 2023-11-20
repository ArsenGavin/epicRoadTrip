const dotenv = require("dotenv")
const stripe = require("stripe")(process.env.STRIPE_KEY)
const orderRepository = require("../repositories/orderRepository")

dotenv.config()

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_WEB_APP
    : process.env.DEV_WEB_APP

async function checkoutSession(cart) {
  if (!cart) throw new Error("Cart is empty or missing")
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "EUR",
          product_data: {
            name: "Road trip 2.0",
            images: [
              "http://blog.dafy-moto.com/wp-content/uploads/2016/04/roadtrip-620x414.jpg",
            ],
          },
          unit_amount: 5000,
        },
        quantity: cart.steps.length,
      },
    ],
    mode: "payment",
    success_url: `${URL}/checkout/success`,
    cancel_url: `${URL}/checkout/failure`,
  })
  const newOrder = {
    timestamp: Date.now(),
    price: 50 * cart.steps.length,
    user: cart.userId,
    session: session.id
  }
  await orderRepository.createOrder(newOrder)
  return session.id
}

async function paymentIntent(paymentInfo) {
  if (!paymentInfo) throw new Error("Payment details are missing")
  return stripe.paymentIntents.create({
    amount: paymentInfo.amount,
    currency: paymentInfo.currency,
    payment_method_types: paymentInfo.payment_method_types,
    receipt_email: paymentInfo.receipt_email,
  })
}

module.exports = {
  checkoutSession,
  paymentIntent,
}
