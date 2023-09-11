const mongoose = require('mongoose');


const userscheema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})

const users = mongoose.model("userdata", userscheema)
module.exports = users