import Room from "../models/room";
import ErrorHandler from "../utils/errorHandel";

// Get all rooms => /api/rooms
const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Create new room => /api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Get a room => /api/rooms/:id
const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      // return res.status(400).json({
      //   success: false,
      //   error: "Room Not Found.",
      // });

      return next(new ErrorHandler("Room Not Found.", 404));
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update a room detail => /api/rooms/:id
const updateRoom = async (req, res, next) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      // return res.status(404).json({
      //   success: false,
      //   error: "Room Not Found.",
      // });

      return next(new ErrorHandler("Room Not Found.", 404));
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Delete a room detail => /api/rooms/:id
const deleteRoom = async (req, res, next) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      // return res.status(404).json({
      //   success: false,
      //   error: "Room Not Found.",
      // });

      return next(new ErrorHandler("Room Not Found.", 404));
      I;
    }

    await room.remove();

    res.status(200).json({
      success: true,
      message: "Room deleted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
