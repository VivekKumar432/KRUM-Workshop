const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body; // object destructuring

    const resposne = await UserModel.findOne({ email: email });

    const userPwd = resposne.password;
    console.log("this is the pwd", userPwd);
    console.log("this is the user", resposne);
    if (userPwd === password) {
      const key = process.env.JWT_KEY;
      const loginToken = jwt.sign(
        {
          id: resposne.id,
          name: resposne.name,
          username: resposne.usernamem,
        },
        key,
        {
          expiresIn: "1h",
        }
      );
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
