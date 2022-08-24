const express = require('express')
const router = express.Router()
const { isNotLoggedIn } = require('./middlewares')
const passport = require('passport')

router.post('/', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err)
            return next(err)
        }
        if (!user) {
            return res.redirect(`/error`)
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError)
                return next(loginError)
            }
            return res.redirect('/')
        })
    })(req, res, next)
})

module.exports = router
