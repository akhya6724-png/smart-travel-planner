const express = require("express");
const router = express.Router();
const Travel = require("../models/Travel");

// Add a travel record (POST)
router.post("/", async (req, res) => {
    try {
        const travel = new Travel(req.body);
        const saved = await travel.save();
        res.json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all travel history (GET)
router.get("/", async (req, res) => {
    try {
        const travels = await Travel.find();
        res.json(travels);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;