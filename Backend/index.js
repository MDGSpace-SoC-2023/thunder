import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import dbConnect from "./dbclient";
import { ethers } from "ethers";
import CarpoolingABI from "../Contracts/CarpoolingABI";
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
const contractAddress = "";
const web3provider = new ethers.providers.WebSocketProvider(
  process.env.Alchemy_API
);
// contract instance for web3
const contract = new ethers.Contract(contractAddress, , web3provider);

server.listen(PORT, async () => {
  try {
    await dbConnect();
    console.log('node version', process.version);
    console.log(`Port: ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
