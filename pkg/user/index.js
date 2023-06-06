const mongoose = require('mongoose');

const User = mongoose.model(
    'user',
    {
        email: String,
        password: String,
        full_name: String
    },
);

const create = async (data) => {
    let user = new User(data);
    return user.save();
};

module.exports = create;