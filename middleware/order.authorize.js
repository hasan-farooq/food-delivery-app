const JWT = require("jsonwebtoken");

exports.placeOrder = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found",
      });
    } else if (token && type !== "customer") {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = JWT.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};

exports.customerOrders = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found",
      });
    } else if (token && type !== "customer") {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = JWT.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};

exports.sellerOrders = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found",
      });
    } else if (token && type !== "seller") {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = JWT.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};

exports.updateOrders = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found",
      });
    } else if (token && !["seller", "customer"].includes(type)) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = JWT.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};

exports.orderDetails = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found",
      });
    } else if (token && !["seller", "customer"].includes(type)) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = JWT.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};
