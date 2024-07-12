const express = require('express')
const userRouter = express.Router();
// const userController = require("../controllers/userController");
const {createUser} = require("../controllers/userController");


// userRouter.post("/create-user", userController.createUser )
userRouter.post("/create-user", createUser )

module.exports = userRouter;