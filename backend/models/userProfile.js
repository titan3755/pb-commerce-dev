const mongoose = require('mongoose')
const UserProfile = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: false},
    fn: {type: String, required: false},
    ln: {type: String, required: false},
    country: {type: String, required: false},
    recvOffers: {type: Boolean, required: false},
})
const model = mongoose.model('UserProfile', UserProfile)
module.exports = model