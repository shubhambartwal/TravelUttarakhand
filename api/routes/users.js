import express from "express";
const router = express.Router();
import {  deleteUserController, getAllUserController, getUserController, updateUserController } from "../controllers/userController.js";
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";
//check authentication
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user you are logged in")
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin you are logged in and you can delete all accounts")
// })
//update
router.put("/:id",verifyUser, updateUserController);

//delete

router.delete("/:id",verifyUser, deleteUserController);
//get
router.get("/:id",verifyUser, getUserController);
//getAll
router.get("/",verifyAdmin,getAllUserController);
export default router;
