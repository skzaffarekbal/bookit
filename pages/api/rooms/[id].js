import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controller/roomController";

import onError from "./../../../middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
