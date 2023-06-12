import crypto from 'crypto'
import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  github: String,
  linkedin: String,
  password: { type: String, required: true },
  hash: String,
  salt: String,
})

export interface UserDocument {
  username: string
  name: string
  email: string
  phone: string
  setPassword?: (password: string) => void
  github?: string
  linkedin?: string
  password?: string
  hash?: string
  salt?: string
}

// Method to check the entered password is correct or not
UserSchema.methods.validPassword = function (password: string) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
  return this.hash === hash
}
// Method to set salt and hash the password for a user
UserSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString('hex')

  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)

  this.password = this.hash + this.salt
}

export default module.exports =
  mongoose.models.User || mongoose.model('User', UserSchema)
