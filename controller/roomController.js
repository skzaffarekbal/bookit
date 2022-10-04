import Room from "../models/room";
import ErrorHandler from "../utils/errorHandel";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

// Get all rooms => /api/rooms
// const allRooms = async (req, res) => {
//   try {
//     const rooms = await Room.find();
//     res.status(200).json({
//       success: true,
//       count: rooms.length,
//       rooms,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

// Get all rooms => /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// Create new room => /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// Get a room => /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
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
});

// Update a room detail => /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
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
});

// Delete a room detail => /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room Not Found.", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room deleted Successfully",
  });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
