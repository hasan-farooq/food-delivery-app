const express = require("express");
const router = express.Router();
const restController = require("../controllers/restaurant");
const restaurantAuthorizer = require("../middleware/restaurant.authorize");

router.get(
  "/",
  restaurantAuthorizer.getRestaurants,
  restController.getRestaurants
);
router.delete(
  "/:id",
  restaurantAuthorizer.deleteRestaurants,
  restController.deleteRestaurant
);
router.get(
  "/:id",
  restaurantAuthorizer.getSelectedRestaurants,
  restController.getSelectedRestaurant
);
router.post(
  "/",
  restaurantAuthorizer.addRestaurants,
  restController.addRestaurant
);

module.exports = router;
