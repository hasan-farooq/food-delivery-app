const JWT = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(404).json({
        message: "Token not found",
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

module.exports = authenticateToken;
