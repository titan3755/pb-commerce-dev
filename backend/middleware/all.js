const express = require('express')
const { v4 } = require('uuid')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const middlewares = [
    express.json(),
    cookieParser(),
    session({
        secret: 'rhjgfuewhdeuiwge21uy342y4837ewguihfbjewgfewufewtyewhjfgyewgfyu',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
]
module.exports = middlewares