const mongoose = require("mongoose");
const validator = require("validator");

const restSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Restaurant must have a name"],
    unique: false,
  },
  sellerID: {
    type: String,
    required: [true, "Restaurant must have a Seller ID"],
  },
  type: {
    type: String,
    required: [true, "Restaurant must have a type"],
  },
  description: {
    type: String,
  },
});

const Restaurant = mongoose.model("restaurants", restSchema);

module.exports = Restaurant;
