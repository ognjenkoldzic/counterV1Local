import "dotenv/config";
import express from "express";
import cors from "cors";
import counterRouter from "./routes/CounterRoutes.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 8001;

app.use(cors());
mongoose.connect(
  "mongodb://localhost/counterLocal",
  console.log("connected with local mongodb db")
);

app.get("/", (req, res) => {
  res.send("Hello World! GET /");
});
app.use("/counter", counterRouter);
//
app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Server listening ${port}`);
});
