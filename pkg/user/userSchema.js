const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;