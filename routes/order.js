const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const orderAuthorizer = require("../middleware/order.authorize");

router.post(
  "/place-order",
  orderAuthorizer.placeOrder,
  orderController.placeOrder
);
router.get(
  "/user-orders/:id",
  orderAuthorizer.customerOrders,
  orderController.getUserOrders
);
router.get(
  "/seller-orders/:id",
  orderAuthorizer.sellerOrders,
  orderController.getSellerOrders
);
router.get(
  "/order-details/:id",
  orderAuthorizer.orderDetails,
  orderController.getOrderDetails
);
router.patch(
  "/update-order/:id",
  orderAuthorizer.updateOrders,
  orderController.updateOrder
);

module.exports = router;
