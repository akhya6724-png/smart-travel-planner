const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
// NOTE: Make sure MongoDB service is running (net start MongoDB)
mongoose.connect("mongodb://127.0.0.1:27017/SmartTravel")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log("!!! MONGODB CONNECTION ERROR !!!");
    console.log("Error details:", err.message);
  });

// Travel Routes
const travelRoutes = require('./routes/travelRoutes');
app.use('/api/travel', travelRoutes);

// Default Route (for testing in browser)
app.get("/", (req, res) => {
  res.send("SmartTravel API is Running 🚍✨");
});

// Status Route (used by your frontend to check connection)
app.get("/status/:id", (req, res) => {
    res.json({ status: "Backend is Running" });
});


// Server Port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});