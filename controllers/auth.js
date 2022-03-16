const userModel = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    await userModel.create(req.body);
    res.send({
      status: "success",
    });
  } catch (err) {
    res.send({
      status: "fail",
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const temp = await userModel.find({
      email: req.body.email,
      password: req.body.password,
    });

    if (temp.length > 0) {
      const token = jwt.sign(temp[0].id, process.env.ENV_SECRET_KEY);
      res.send({
        message: "success",
        type: temp[0].type,
        name: temp[0].name,
        id: temp[0].id,
        token: token,
      });
    } else {
      res.send({
        message: "fail",
      });
    }
  } catch {}
};
