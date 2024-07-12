const UserModel = require("../models/userModel")

const loginController = async (req, res) =>{

    try {
    const {email, password } = req.body; // object destructuring

    const resposne = await UserModel.findOne({email:email})

    if(!resposne){
     console.log("Error in login", resposne);
     return res.status(401).json({message:"Error during Login"})
    }
    return res.status(200).json({message:"Login Success"})
    } catch (error) {
       console.log("Error in server") 
    }
   
}


module.exports = {
    loginController
}