import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, 'Actual URL is required for shortening it']
  },
  shortenUrl: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
})

const urlModel = mongoose.model('urls', urlSchema)

export default urlModel
