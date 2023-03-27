// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const user = new mongoose.Schema({
    name: {
        type: String,
        minLength: 6,
        maxlength: 32,
        trim: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9 ]+$/, 'is invalid']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "can't be blank"]
    },
    // image: {
    //     type: String,
    //     default: "",
    // }
},
    { timestamps: true },
);
// exports.User = mongoose.model("user", user)
const User = mongoose.model("user", user);
export default User;
