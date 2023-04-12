import User from "../models/User.js";
export const updateUserController= async(req,res,next)=>{
    try{
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      ); //new true will return the updated state otherwise we will get the old state
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
}
export const deleteUserController= async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(
          req.params.id
        ); res.status(200).json("User has been deleted");
      } catch (error) {
       next(error);
      }
}
export const getUserController= async(req,res,next)=>{
    try {
        const user = await User.findById(
          req.params.id
        );
        res.status(200).json(user);
      } catch (error) {
        next(error);
      }
}
export const getAllUserController= async(req,res,next)=>{
    try {
        const AllUsers = await User.find();
         res.status(200).json(AllUsers);
      } catch (error) {
        next(error);
      }
}