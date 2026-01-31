const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

mongoose.connect(
  "mongodb+srv://lakshmichaitanya313_db_user:g5Q39pxCnayuAgtB@cluster0.adxuod5.mongodb.net/?appName=Cluster0",
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});