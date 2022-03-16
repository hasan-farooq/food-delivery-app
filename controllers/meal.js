const mealModel = require("../models/meal");

exports.getSelectedMeals = async (req, res, next) => {
  try {
    const restID = req.params.id;
    meals = await mealModel.find({
      restID: restID,
    });
    res.status(200).json({
      message: "successful",
      meals: meals,
    });
  } catch {}
};

exports.getMeals = async (req, res, next) => {
  try {
    meals = await mealModel.find();
    res.status(200).json({
      message: "successful",
      meals: meals,
    });
  } catch {}
};

exports.deleteMeal = async (req, res, next) => {
  try {
    const mealID = req.params.id;
    const temp = await mealModel.findByIdAndDelete(mealID);
    res.send("Deleted !!!");
  } catch {
    res.send("not found");
  }
};

exports.addMeal = async (req, res, next) => {
  try {
    await mealModel.create(req.body);
    res.send({
      status: "success",
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};

exports.deleteMealbyRestaurant = async (req, res, next) => {
  try {
    const restID = req.params.id;
    const temp = await mealModel.deleteMany({
      restID: restID,
    });
    console.log(temp);
    res.send("Deleted !!!");
  } catch {
    res.send("not found");
  }
};
