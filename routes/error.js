const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', async (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'error.html'))
})

module.exports = router
