const restModel = require("../models/restaurant");

exports.getRestaurants = async (req, res) => {
  try {
    restaurants = await restModel.find();
    res.status(200).json({
      message: "success",
      restaurants: restaurants,
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};

exports.getSelectedRestaurant = async (req, res, next) => {
  try {
    const userID = req.params.id;
    restaurants = await restModel.find({
      sellerID: userID,
    });
    if (restaurants.length > 0) {
      res.status(200).json({
        status: "success",
        restaurants: restaurants,
      });
    } else {
      res.status(200).json({
        status: "success",
        restaurants: "not found",
      });
    }
  } catch (err) {
    res.send({
      status: "fails",
    });
  }
};

exports.addRestaurant = async (req, res) => {
  try {
    await restModel.create(req.body);
    res.send({
      status: "success",
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const restID = req.params.id;
    await restModel.findByIdAndDelete(restID);
    res.status(200).json("Deleted !!!");
  } catch {
    res.status(404).json("not found");
  }
};
