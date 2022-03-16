const jwt = require("jsonwebtoken");

exports.getRestaurants = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found ",
      });
    } else if (token && type !== "customer") {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = jwt.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};

exports.getSelectedRestaurants = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found ",
      });
    } else if (token && type !== "seller") {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = jwt.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};

exports.addRestaurants = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];

    if (!token) {
      return res.status(404).json({
        message: "Token not found ",
      });
    } else if (token && type !== "seller") {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = jwt.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};

exports.deleteRestaurants = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];

    if (!token) {
      return res.status(404).json({
        message: "Token not found ",
      });
    } else if (token && type !== "seller") {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const authorizedData = jwt.verify(token, process.env.ENV_SECRET_KEY);
    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.send({
      message: "fail",
    });
  }
};
