const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,

    },
    time: {
        type: Date,
        default: Date.now(),
    },
    until: {
        type: Date,
    }
})
module.exports = mongoose.model("Todo", schema);