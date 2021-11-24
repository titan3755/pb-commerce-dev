const mongoose = require('mongoose')
const AdminUsers = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})
const model = mongoose.model('AdminUsers', AdminUsers)
module.exports = model