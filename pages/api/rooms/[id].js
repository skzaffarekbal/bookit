import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controller/roomController";

const handler = nc();
dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
