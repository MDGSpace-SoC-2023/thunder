import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PORT = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors());


server.listen(PORT, () => {
  console.log("server running at http://localhost:3000");
});
