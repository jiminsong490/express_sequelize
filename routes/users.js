const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.post('/', async (req, res, next) => {
    console.log(req.body, 'body')
    try {
        const user = await User.create({
            name: req.body.name,
            password: req.body.password,
            age: 32,
            married: true,
        })
        res.status(201).json(user)
        // console.log(user)
    } catch (e) {
        console.error(e)
        next(e)
    }
})

module.exports = router
