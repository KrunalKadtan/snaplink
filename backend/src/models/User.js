import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required to register user']
  },
  email: {
    type: String,
    unique: [true, 'email already exists'],
    required: [true, 'email is required to register user']
  },
  password: {
    type: String,
    required: [true, 'password is required to register user']
  },
  urls: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'urls'
  }
})

const userModel = mongoose.model('users', userSchema)

export default userModel
