import { config } from 'dotenv'
config()

import mongoose from 'mongoose'
import app from './src/app.js'

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connection successful')

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log('Error in Database connection', error)
  }
}

connectDB()

