const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        enum: ["Mr", "Mrs","Miss"]
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    phone: {
        type: Number,
        required: [true, "Phone number is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    address: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        pincode: {
            type: Number,
            length: 6
        }
    },

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)