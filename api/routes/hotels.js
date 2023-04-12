import express from "express";
const router = express.Router();
import { createHotelController, deleteHotelController, getAllHotelController, getHotelController, updateHotelController } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
//create
router.post("/",verifyAdmin, createHotelController);
//update
router.put("/:id",verifyAdmin, updateHotelController);
//delete
router.delete("/:id",verifyAdmin, deleteHotelController);
//get
router.get("/:id", getHotelController);
//getAll
router.get("/",getAllHotelController);
export default router;
