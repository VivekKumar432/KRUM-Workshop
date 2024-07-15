const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body; // object destructuring

    const resposne = await UserModel.findOne({ email: email });

    const encryptedPwd = resposne.password;

    console.log("this is the pwd", password);
    console.log("this is the user", resposne);
    if (await bcrypt.compare(password, encryptedPwd)) {
      const key = process.env.JWT_KEY;
      const loginToken = jwt.sign(
        {
          id: resposne.id,
          name: resposne.name,
          username: resposne.username,
        },
        key,
        {
          expiresIn: "1h",
        }
      );
      console.log("this isthe session token",loginToken);
      res.cookie("sessionToken", loginToken);
      console.log("Cookie added");
    }

    if (!resposne) {
      console.log("Error in login", resposne);
      return res.status(401).json({ message: "Error during Login" });
    }
    return res.status(200).json({ message: "Login Success" });
  } catch (error) {
    console.log("Error in server", error);
  }
};

module.exports = {
  loginController,
};
