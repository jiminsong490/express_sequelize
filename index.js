const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const { sequelize } = require('./models')
const passport = require('passport')
const sessionStore = require('./session/session')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const commentsRouter = require('./routes/comments')

const app = express()
dotenv.config()

app.set('port', process.env.PORT || 3001)
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

sequelize
    .sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공')
    })
    .catch((err) => {
        console.error(err)
    })

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'views/front/build'))) // 현재폴더 아래 'public'이라는 폴더에 정적 파일을 제공하겠다는 뜻, 본인은 생략
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        store: sessionStore,
        cookie: {
            httpOnly: true,
            secure: false,
        },
        name: 'rnbck',
    })
)
// app.use(passport.initialize())
// app.use(passport.session())

// const User = require('./models/user')

// passport.serializeUser((user, done) => {
//     done(null, user.id)
//     console.log(user)
// })
// passport.deserializeUser((id, done) => {
//     try {
//         const user = User.findOne({
//             where: { id },
//         })

//         if (!user) {
//             return done(new Error('no user'))
//         }
//         return done(null, user)
//     } catch (e) {
//         console.error(e)
//         return done(e)
//     }
// })

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/comments', commentsRouter)

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
    res.status(err.status || 500)
    res.render('error')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
