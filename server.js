import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import collegeRoutes from "./src/routes/collegeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/colleges", collegeRoutes);

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});