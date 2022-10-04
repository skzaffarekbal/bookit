import nc from "next-connect";

import { allRooms } from "../../../controller/roomController";

const handler = nc();

handler.get(allRooms);

export default handler;