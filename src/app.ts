import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import passport from 'passport'

import authRoutes from "./routes/auth.routes";
import creditCardsRoutes from "./routes/credit-cards.routes"
import passportMiddlewares from './middlewares/passport'
import {createUsers} from './libs/initialSetup'

// intializations
const app = express()
createUsers()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddlewares)

app.use('/api/auth', authRoutes)
app.use('/api/credit-cards', creditCardsRoutes)

export default app