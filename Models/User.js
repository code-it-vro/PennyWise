
const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    expenses : [
        {
            text: {
                type:String,
                required:true
            },
            amount: {
                type: Number,
                required:true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;