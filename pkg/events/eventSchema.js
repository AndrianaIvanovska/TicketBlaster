const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    date: {
        type: Date,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    }
})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;