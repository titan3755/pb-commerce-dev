require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const auth = require('../auth/authenticator')
const ShopItems = require('../models/newItem')
const Admins = require('../models/adminUsers')
const router = express.Router()

router
    .route('')
    .get(async (req, res) => {
        if (auth.isAuthenticated(req.sessionID)) {
            let shopData = await ShopItems.find({})
            res.status(200)
            res.json({
                status_code: res.statusCode,
                message: "You are authenticated!",
                successful: true,
                shopData: shopData
            })
        }
        else {
            res.status(403)
            res.json({
                status_code: res.statusCode,
                message: "You are not authorized to access this endpoint",
                desc: "This endpoint can only be accessed from the PhotoBytes ECommerce React Application"
            })
        }
    })
router
    .route('/createadmin')
    .post(async (req, res) => {
        if (req.body.key === process.env.ADMIN_KEY) {
            let username = req.body.username
            let hashedPassword = await bcrypt.hash(req.body.password, 10)
            let dbRes = await Admins.create({
                username: username,
                password: hashedPassword,
            })
            res.status(201)
            res.json({
                status_code: res.statusCode,
                message: "Successfully created an admin user!",
                successful: true
            })
        }
        else {
            res.status(401)
            res.json({
                status_code: res.statusCode,
                message: "Key is incorrect!",
                successful: false
            })
        }
    })
    .get((req, res) => {
        res.status(403)
        res.json({
            status_code: res.statusCode,
            message: "You are not authorized to access this endpoint",
            desc: "This endpoint can only be accessed from the PhotoBytes ECommerce React Application"
        })
    })
router
    .route('/login')
    .post(async (req, res) => {
        if (!auth.isAuthenticated(req.sessionID)) {
            let username = req.body.username
            let password = req.body.password
            try {
                let dbCreds = await Admins.findOne({username: username})
                if (dbCreds && await bcrypt.compare(password, dbCreds.password)) {
                    auth.login(req.sessionID)
                    res.status(200)
                    res.json({
                        status_code: res.statusCode,
                        message: "Logged in successfully!",
                        successful: true
                    })
                }
                else {
                    res.status(401)
                    res.json({
                        status_code: res.statusCode,
                        message: "incorrect credentials!",
                        successful: false
                    })
                }
            } catch {
                res.status(401)
                res.json({
                    status_code: res.statusCode,
                    message: "incorrect credentials!",
                    successful: false
                })
            }
        }
        else {
            res.status(406)
            res.json({
                status_code: res.statusCode,
                message: "Already logged in!",
                successful: false
            })
        }
    })
    .get((req, res) => {
        res.status(403)
        res.json({
            status_code: res.statusCode,
            message: "You are not authorized to access this endpoint",
            desc: "This endpoint can only be accessed from the PhotoBytes ECommerce React Application"
        })
    })
router
    .route('/logout')
    .get((req, res) => {
        if (auth.isAuthenticated(req.sessionID)) {
            auth.logout(req.sessionID)
            res.status(200)
            res.json({
                status_code: res.statusCode,
                message: "Logged out successfully!"
            })
        }
        else {
            res.status(403)
            res.json({
                status_code: res.statusCode,
                message: "You are not authorized to access this endpoint",
                desc: "This endpoint can only be accessed from the PhotoBytes ECommerce React Application"
            })
        }
    })
router
    .route('/deleteallsessions')
    .post((req, res) => {
        if (auth.isAuthenticated(req.sessionID) && req.body.deletionKey === process.env.DELETION_KEY) {
            auth.destroy()
            res.status(200)
            res.json({
                status_code: res.statusCode,
                message: "Deleted all session IDs successfully!",
                successful: true
            })
        }
        else {
            res.status(401)
            res.json({
                status_code: res.statusCode,
                message: "You are not authorized to perform this task!",
                successful: false
            })
        }
    })
    .get((req, res) => {
        res.status(403)
        res.json({
            status_code: res.statusCode,
            message: "You are not authorized to access this endpoint",
            desc: "This endpoint can only be accessed from the PhotoBytes ECommerce React Application"
        })
    })
router
    .route('/authorized')
    .get((req, res) => {
        if (auth.isAuthenticated(req.sessionID)) {
            res.status(200)
            res.json({
                status_code: res.statusCode,
                message: "User is authorized!",
                successful: true
            })
        }
        else {
            res.status(401)
            res.json({
                status_code: res.statusCode,
                message: "User is not authorized!",
                successful: false
            })
        }
    })

module.exports = router