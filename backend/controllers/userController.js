const UserModel = require("../models/userModel")

const createUser = async (req, res)=>{
    console.log(req.body);
    try {
        const isExist = await UserModel.findOne({
            email: req.body.email
        });
        if(isExist){
            console.log("The email add entered is already registered");
            return res.status(409).json({message:"User already registerd"})
        }
        const newUser = await UserModel.create({
            id: 1234,
            name: req.body.name,
            username: req.body.username,
            email:req.body.email,
            password:req.body.password,
        })
    return res.status(201).json({message:"User successfully registerd"});
    } catch (error) {
        res.status(500).json({message:"Some error in the backend"})
    }
    
}


module.exports = {
    createUser
}