const express = require("express");
const router = express.Router();
const mealController = require("../controllers/meal");
const mealAuthorizer = require("../middleware/meal.authorize");

router.post("/", mealAuthorizer.addMeals, mealController.addMeal);
router.get(
  "/:id",
  mealAuthorizer.getRestaurantMeals,
  mealController.getSelectedMeals
);
router.delete("/:id", mealAuthorizer.deleteMeals, mealController.deleteMeal);
router.delete(
  "/restaurants/:id",
  mealAuthorizer.deleteMeals,
  mealController.deleteMealbyRestaurant
);
module.exports = router;
