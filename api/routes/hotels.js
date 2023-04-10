import express from "express";
const router = express.Router();
import { createHotelController, deleteHotelController, getAllHotelController, getHotelController, updateHotelController } from "../controllers/hotelController.js";
//create
router.post("/", createHotelController);
//update
router.put("/:id", updateHotelController);
//delete
router.delete("/:id", deleteHotelController);
//get
router.get("/:id", getHotelController);
//getAll
router.get("/",getAllHotelController);
export default router;
