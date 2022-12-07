const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URI = "mongodb+srv://demo:msU54IYeWUQ1YSmL@cluster0.3hzhekh.mongodb.net/?retryWrites=true&w=majority"
// Connect DB
console.log(process.env.CLOUDINARY_CLOUD_NAME,process.env.CLOUDINARY_API_KEY,process.env.CLOUDINARY_API_SECRET)
mongoose
  .connect(URI)
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
 app.use(express.json());

//Route
app.use("/user", require("./routes/user"));

app.listen(5000 , ()=>console.log("Server is runnning at port 5000"))