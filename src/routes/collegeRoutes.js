import express from "express";
import { getColleges, getCollegeById } from "../controllers/collegeController.js";
import { db } from "../config/db.js"; // ✅ import DB

const router = express.Router();

router.get("/", getColleges);
router.get("/:id", getCollegeById);

// ✅ ADD THIS COMPARE API
router.post("/compare", (req, res) => {
  const { ids } = req.body;

  if (!ids || ids.length === 0) {
    return res.status(400).json({ message: "No IDs provided" });
  }

  db.query(
    "SELECT * FROM colleges WHERE id IN (?)",
    [ids],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json(result);
    }
  );
});

export default router;