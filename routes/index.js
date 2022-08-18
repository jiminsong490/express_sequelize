const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../views/front/build', 'index.html'))
    } catch (e) {
        console.error(e)
        next(e)
    }
})
module.exports = router
