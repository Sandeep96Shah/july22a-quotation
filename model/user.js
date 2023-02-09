const mongoose = require('mongoose');

// define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    quotations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quotation",
        }
    ]
}, {
    timestamps: true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;