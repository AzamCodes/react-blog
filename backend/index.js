const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const authRoute = require("../backend/routes/auth");
const userRoute = require("../backend/routes/users");
const postRoute = require("../backend/routes/posts");
const commentRoute = require("../backend/routes/comments");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Database is connected successfully");
//     // console.log(req.body);
//   } catch (err) {
//     console.log(err);
//   }
// };
// Middleware
dotenv.config();
app.use(
  cors({
    origin: "https://reactblogverse.netlify.app",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

// Image Upload
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
    // fn(null,"image1.jpg")
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  // console.log(req.body)
  res.status(200).json("Image has been uploaded successfully!");
});
mongoose.connect(process.env.MONGO_URL);
app.listen(process.env.PORT, () => {
  // console.log(process.env.MONGO_URL);
  connectDB();
  console.log("App is running on port " + process.env.PORT);
});
