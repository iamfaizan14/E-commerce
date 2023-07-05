import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import cors from "cors";

const app = express();
//configure dotenv
dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());

//database config
connectDB();

//routes
//users-route
app.use("/api/v1/auth", authRoute);
//categories-route
app.use("/api/v1/category", categoryRoute);

app.get("/", (req, res) => {
  res.send({ message: "hello" });
});
let PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
