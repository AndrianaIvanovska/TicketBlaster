const mongoose = require("mongoose");
const uuid = require("uuid");

const orderSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: [true, "Must have number of tickets"]
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: [true, "Must have event identification"]
    },
    beholder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Must have user identification"]
    },
    purchaseNo: {
        type: String,
        default: function () {
            return uuid.v4();
        }
    },
    eventDate: {
        type: Date,
        required: [true, "Order must have date"],
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;