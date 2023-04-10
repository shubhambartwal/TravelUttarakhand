import Hotel from "../models/Hotel.js";
export const createHotelController= async(req,res,next)=>{
    const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
   next(err);
  }
}
export const updateHotelController= async(req,res,next)=>{
    try{
    const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      ); //new true will return the updated state otherwise we will get the old state
      res.status(200).json(updatedHotel);
    } catch (error) {
      next(error);
    }
}
export const deleteHotelController= async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(
          req.params.id
        ); res.status(200).json("Hotel has been deleted");
      } catch (error) {
       next(error);
      }
}
export const getHotelController= async(req,res,next)=>{
    try {
        const hotel = await Hotel.findById(
          req.params.id
        );
        res.status(200).json(hotel);
      } catch (error) {
        next(error);
      }
}
export const getAllHotelController= async(req,res,next)=>{
    try {
        const AllHotels = await Hotel.find(
          req.params.id
        ); res.status(200).json(AllHotels);
      } catch (error) {
        next(error);
      }
}