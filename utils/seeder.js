const Room = require("../models/room");

const rooms = require("../data/room");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://zaff:zaff%40123@cluster0.bzoh4.mongodb.net/bookit?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Successfully Connected to DataBase..."))
  .catch((err) => console.log("Connection Failed !!!!!   : ", err));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("All Rooms are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
