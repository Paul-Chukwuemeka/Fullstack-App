import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import router from "./Routes/book.route.js";
import cors from "cors";

configDotenv();
const server = express();
server.use(express.json());
server.use(cors());
const port = process.env.PORT;
const connectionString =
  process.env.CONNECTION_STRING;

server.use("/books", router);

mongoose.connect(connectionString).then(() => {
  try {
    server.listen(port, () => {
      console.log("server is running");
  });
  } catch (error) {
    console.log(error);
  }
});
