import User from "../models/User.js";

export const registerController =async (req,res,next)=>{
    try{
const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    isAdmin:req.body.isAdmin,
})
await newUser.save();
res.status(200).send("User has been created successfully")
    }
    catch(err){
        next(err);
    }
}