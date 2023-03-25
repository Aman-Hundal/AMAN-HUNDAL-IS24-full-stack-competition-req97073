const express = require("express");
const router = express.Router();

//GET ROUTE
router.get("/", async (req, res) => {
  res.status(200);
});

//POST ROUTE
router.post("/", async (req, res) => {
  res.status(201).json({ success: "User result created and stored!" });
});

module.exports = router;
