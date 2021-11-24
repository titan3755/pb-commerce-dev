const mongoose = require('mongoose')
const ShopItems = new mongoose.Schema({
    item_title: {type: String, required: true},
    item_desc: {type: String, required: true},
    item_price: {type: Number, required: true},
    date_added: {type: Date, required: true},
    item_available: {type: Boolean, required: true}
})
const model = mongoose.model('ShopItems', ShopItems)
module.exports = model

