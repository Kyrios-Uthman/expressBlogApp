import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "./db/db.js";
const app = express();

const PORT = process.env.PORT || 6060;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT);
