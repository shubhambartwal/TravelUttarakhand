import express from "express";
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("Hi this is Auth endpoint");
})
export default router;