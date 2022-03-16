const jwt = require("jsonwebtoken");

exports.getRestaurantMeals = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found ",
      });
    } else if (token && !["customer", "seller"].includes(type)) {
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

exports.deleteMeals = (req, res, next) => {
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

exports.addMeals = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const type = req.headers["type"];
    console.log(token, type);
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
