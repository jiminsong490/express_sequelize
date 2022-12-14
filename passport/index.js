const passport = require('passport')
const localStrategy = require('./localStrategy')
const User = require('../models/user')

module.exports = () => {
    passport.serializeUser((user, done) => {
        console.log('serializeUser ')
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        try {
            const user = User.findOne({
                where: { id },
            })

            if (!user) {
                return done(new Error('no user'))
            }
            console.log('deserializeUser ')
            return done(null, user)
        } catch (e) {
            console.error(e)
            return done(e)
        }
    })
    localStrategy()
}
