const UserModel = require("../models/userModel")

const createUser = (req, res)=>{

    console.log(req.body);
    try {
        const isExist = UserModel.findOne({
            email: req.email
        })
    
        if(isExist){
            console.log("The email add entered is already registered");
            return res.status(409).json({message:"User already registerd"})
        }
    
    
        const newUser = UserModel.create({
            id: 1234,
            name: req.name,
            email:req.email,
            password:req.password,
        })
    
    
       return res.status(201).json({message:"User successfully registerd"});
    } catch (error) {
        res.status(500).json({message:"Some error in the backend"})
    }
    
}


module.exports = {
    createUser
}