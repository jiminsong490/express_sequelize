const passport = require('passport')
const User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id)
    console.log(user)
})
passport.deserializeUser((id, done) => {
    try {
        const user = User.findOne({
            where: { id },
        })

        if (!user) {
            return done(new Error('no user'))
        }
        return done(null, user)
    } catch (e) {
        console.error(e)
        return done(e)
    }
})
