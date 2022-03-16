const mongoose = require("mongoose");
const validator = require("validator");

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Meal must have a name"],
    unique: false,
  },
  sellerID: {
    type: String,
    required: [true, "Meal must have a Seller ID"],
  },
  price: {
    type: Number,
    required: [true, "Meal must have a price"],
  },
  restID: {
    type: String,
    required: [true, "Meal must have a Rest ID"],
  },
  description: {
    type: String,
  },
});

const Meal = mongoose.model("meals", mealSchema);

module.exports = Meal;
