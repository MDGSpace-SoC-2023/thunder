import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import dbConnect from "./dbclient";

const PORT = 5000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected");
});

rides = [];
drives = [];
server.listen(PORT, () => {
  try {
    dbConnect();
  } catch (err) {
    console.log(err);
  }
});
