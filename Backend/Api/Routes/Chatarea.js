import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;
