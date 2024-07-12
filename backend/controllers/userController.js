const UserModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require("uuid");
const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const isExist = await UserModel.findOne({
      email: req.body.email,
    });
    if (isExist) {
      console.log("The email add entered is already registered");
      return res.status(409).json({ message: "User already registerd" });
    }


    const salt = await bcrypt.genSalt(10);

    const encryptedPassword = await bcrypt.hash(req.body.password, salt);
    
    const newUser = await UserModel.create({
      id: uuidv4(),
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: encryptedPassword,
    });
    return res.status(201).json({ message: "User successfully registerd" });
  } catch (error) {
    res.status(500).json({ message: "Some error in the backend" });
  }
};

module.exports = {
  createUser,
};
