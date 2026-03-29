import express from 'express'
import userRoutes from './routes/user.routes.js'
import urlRoutes from './routes/url.routes.js'

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/urls', urlRoutes)

export default app
