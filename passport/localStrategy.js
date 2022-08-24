const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/user')

module.exports = () => {
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                const user = await User.findOne({
                    where: { name: username },
                })
                if (user) {
                    if (user.password === password) {
                        done(null, user)
                    } else {
                        return done(null, flase, {
                            message: 'Incorrect password.',
                        })
                    }
                } else {
                    return done(null, flase, {
                        message: 'Incorrect username.',
                    })
                }
            } catch (err) {
                console.error(err)
                done(err)
            }
        })
    )
}
