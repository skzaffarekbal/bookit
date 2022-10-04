import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
//   console.log(process.env.DB_ATLAS_URI);
  mongoose
    .connect(process.env.DB_ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    })
    .then(() => console.log("Successfully Connected to DataBase..."))
    .catch((err) => console.log("Connection Failed !!!!!   : ", err));
};

export default dbConnect;
