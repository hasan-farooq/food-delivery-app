const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  meals: {
    type: [Object],
    required: [true, "Order must have meals"],
  },
  sellerID: {
    type: String,
    required: [true, "Order must have a Seller ID"],
  },
  price: {
    type: Number,
    required: [true, "Order must have a price"],
  },
  restID: {
    type: String,
    required: [true, "Order must have a Rest ID"],
  },
  userID: {
    type: String,
    required: [true, "Order must have a User ID"],
  },
  status: {
    type: String,
    default: "Placed",
  },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
