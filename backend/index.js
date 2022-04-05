const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const app = express();
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB)
  .then(console.log("connected to database"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.use("/", (req, res) => {
  console.log("Hello Application NODE!");
});

app.listen("5000", () => {
  console.log("Backend is listening");
});
