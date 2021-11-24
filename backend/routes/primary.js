const express = require('express')
const bodyParser = require('body-parser')
const ShopItems = require('../models/newItem')
const router = express.Router()

router
    .route('/shop')
    .get((req, res) => {
        res.json({
            status_code: res.statusCode,
            items: ShopItems.find({}),
        })
    })

router
    .route('/devcheck')
    .get((req, res) => {
        res.json({
            status_code: res.statusCode,
            sid: req.sessionID,
            condition: 'API is working correctly!',
            description: 'This app is an API for interacting with the PhotoBytes Studios ECommerce Application'
        })
    })

module.exports = router