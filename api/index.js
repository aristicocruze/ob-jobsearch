const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const postRoute = require("./routes/posts");

const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use("/images", express.static(path.resolve(__dirname, "./images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  //Returns the urls for the uploaded files.
  res.status(200).json(req.files.map(item => `/images/${item.filename}`));
});

app.use("/api/posts", postRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});
