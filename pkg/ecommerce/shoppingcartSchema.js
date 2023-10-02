const mongoose = require("mongoose");

const shoppingcartSchema = new mongoose.Schema({
    count: {
        type: Number
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
    }
});

const ShoppingCart = mongoose.model("ShoppingCart", shoppingcartSchema);

module.exports = ShoppingCart;