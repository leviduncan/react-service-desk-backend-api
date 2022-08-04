const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    issueType: {
        type: String,
        required: true,
    },
    issueDesc: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const users = mongoose.model('users', userSchema)
module.exports = users