const express = require('express')
const userRouter = express.Router();
// const userController = require("../controllers/userController");
const {createUser} = require("../controllers/userController");
const {loginController} = require("../controllers/loginController");
const logoutController = require('../controllers/logoutController');


// userRouter.post("/create-user", userController.createUser )
userRouter.post("/create-user", createUser )
userRouter.post("/login", loginController)
userRouter.post("/logout", logoutController)

module.exports = userRouter;