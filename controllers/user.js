const userModel = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    users = await userModel.find();
    res.status(200).json({
      status: "successful",
      data: {
        users: users,
      },
    });
  } catch {}
};
