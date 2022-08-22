const express = require('express')
const router = express.Router()

const Comment = require('../models/comment')

router
    .route('/')
    .get(async (req, res, next) => {
        try {
            const comment = await Comment.findAll()
            res.json(comment)
        } catch (e) {
            console.error(e)
            next(e)
        }
    })
    .post(async (req, res, next) => {
        try {
            const comment = await Comment.create({
                name: req.body.name,
                comment: req.body.comment,
            })
            res.status(201).json(comment)
        } catch (e) {
            console.error(e)
            next(e)
        }
    })

module.exports = router
