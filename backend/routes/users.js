const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const UserProfile = require('../models/userProfile')
const router = express.Router()
const JWTAuthenticator = (req, res, next) => {
    const { token } = req.body
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        } 
        req.user = user
        next()
    })
}
router.post('/register', async (req, res) => {
    try {
        const { username, password, email, fn, ln, country, recvOffers } = req.body
        let hashedPassword = await bcrypt.hash(password, 10)
        let dbRes = await UserProfile.create({username: username, password: hashedPassword, email: email, fn: fn, ln: ln, country: country, recvOffers: recvOffers})
        return res.json({
            status_code: res.statusCode,
            success: true,
            dbRes: dbRes,
            msg: "User registered successfully!"
        })
    }
    catch (err) {
        res.status(406)
        return res.json({
            status_code: res.statusCode,
            success: false,
            msg: err
        })
    }
})
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        let dbRes = await UserProfile.findOne({ username: username })
        if (await bcrypt.compare(password, dbRes.password)) {
            let token = jwt.sign({
                id: dbRes._id,
                user: dbRes
            }, process.env.ACCESS_KEY)
            return res.json({
                status_code: res.statusCode,
                success: true,
                jwt: token,
                msg: "Logged in successfully!"
            })
        }
        res.status(401)
        return res.json({
            status_code: res.statusCode,
            success: false,
            msg: "Authentication failed! [INCORRECT CREDENTIALS]"
        })
    }
    catch (err) {
        res.status(401)
        return res.json({
            status_code: res.statusCode,
            success: false,
            msg: err
        })
    }
})
router.post('/authorization', JWTAuthenticator, (req, res) => {
    if (req.user) {
        res.json({
            status_code: res.statusCode,
            success: true,
            user: req.user,
            msg: "User is authenticated!"
        })
    }
    else {
        res.status(401)
        return res.json({
            status_code: res.statusCode,
            success: false,
            msg: "Not authenticated/logged in!"
        })
    }
})

module.exports = router