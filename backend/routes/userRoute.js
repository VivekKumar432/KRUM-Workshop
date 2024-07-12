const express = require('express')
const userRouter = express.Router();
// const userController = require("../controllers/userController");
const {createUser} = require("../controllers/userController");
const {loginController} = require("../controllers/loginController");


// userRouter.post("/create-user", userController.createUser )
userRouter.post("/create-user", createUser )
userRouter.post("/login", loginController)

module.exports = userRouter;