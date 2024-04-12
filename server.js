const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/connectDB");
const auctionRoute = require("./routes/auctionRoute");

connectDB();
const app = express();
app.use(express.json());

app.use("/api", auctionRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`)
);
