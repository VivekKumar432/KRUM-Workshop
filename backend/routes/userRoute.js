const express = require("express");
const userRouter = express.Router();
// const userController = require("../controllers/userController");
const { createUser } = require("../controllers/userController");
const { loginController } = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const checkLoginStatus = require("../middleware/checkLoginStatus");

// userRouter.post("/create-user", userController.createUser )
userRouter.post("/create-user", createUser);
userRouter.post("/login", loginController);
userRouter.post("/logout", logoutController);
userRouter.get("/check-login", checkLoginStatus, (req, res) => {
  res.status(200).json({ message: "User is logged in", user: req.user });
});

module.exports = userRouter;
