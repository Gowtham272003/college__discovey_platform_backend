import { db } from "../config/db.js";

export const getColleges = (req, res) => {
  db.query("SELECT * FROM colleges", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

export const getCollegeById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM colleges WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};