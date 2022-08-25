const express = require('express')
const router = express.Router()
const { isNotLoggedIn, isLoggedIn } = require('./middlewares')
const passport = require('passport')

router
    .route('/')
    .get(isLoggedIn, async (req, res, next) => {
        req.logout(function (err) {
            // passport 0.6.0부터 로그아웃 코드 변경
            if (err) {
                return next(err)
            }
            req.session.destroy((err) => {
                res.redirect('/')
            })
        })
    })
    .post(isNotLoggedIn, (req, res, next) => {
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
