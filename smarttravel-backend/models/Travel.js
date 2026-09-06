const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({
    place: { type: String, required: true },
    dateVisited: { type: String, required: true },
    notes: { type: String }
});

module.exports = mongoose.model("Travel", TravelSchema);