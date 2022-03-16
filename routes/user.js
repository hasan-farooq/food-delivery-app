const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const authController = require("../controllers/auth");
const verifyToken = require("../middleware/user.authorize");

router.get("/users", verifyToken, userController.getUsers);
router.post("/login", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
