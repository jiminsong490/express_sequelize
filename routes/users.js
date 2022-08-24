const express = require('express')
const router = express.Router()
const User = require('../models/user')

router
    .route('/')
    .get(async (req, res, next) => {
        try {
            // if (req.session.num === undefined) req.session.num = 1
            // else req.session.num = req.session.num + 1
            // console.log(req.session)
            const users = await User.findAll()
            res.json(users)
        } catch (e) {
            console.error(e)
            next(e)
        }
    })
    .post(async (req, res, next) => {
        try {
            const user = await User.create({
                name: req.body.name,
                password: req.body.password,
                age: 32,
                married: true,
            })
            res.status(201).json(user)
            console.log(user)
        } catch (e) {
            console.error(e)
            next(e)
        }
    })

module.exports = router
