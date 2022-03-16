const orderModel = require("../models/order");

exports.placeOrder = async (req, res, next) => {
  try {
    await orderModel.create(req.body);
    res.send({
      status: "success",
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const orderID = req.params.id;
    const order = await orderModel.findByIdAndUpdate(orderID, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
    });
  } catch {
    res.status(404).json({
      status: "not found",
    });
  }
};

exports.getOrderDetails = async (req, res, next) => {
  try {
    const orderID = req.params.id;
    const order = await orderModel.findById(orderID);
    res.send({
      status: "success",
      order: order,
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};

exports.getUserOrders = async (req, res, next) => {
  try {
    const userID = req.params.id;
    orders = await orderModel.find();
    var temp = [];
    for (var i = 0; i < orders.length; i++) {
      if (orders[i].userID === userID) {
        temp.push(orders[i]);
      }
    }
    res.status(200).json({
      status: "successful",
      orders: temp,
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};

exports.getSellerOrders = async (req, res, next) => {
  try {
    const userID = req.params.id;
    orders = await orderModel.find();
    var temp = [];
    for (var i = 0; i < orders.length; i++) {
      if (orders[i].sellerID === userID) {
        temp.push(orders[i]);
      }
    }
    res.status(200).json({
      status: "success",
      orders: temp,
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};
