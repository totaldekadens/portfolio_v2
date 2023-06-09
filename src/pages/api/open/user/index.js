import caseInsensitive from '@/lib/caseCheck'
import dbConnect from '@/lib/dbConnect'
import User from '@/models/UserModel'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        if (!req.body) {
          return res.status(400).json({ success: false, data: 'Bad request' })
        }
        const userTaken = await User.findOne({
          username: caseInsensitive(req.body.username),
        })
        if (userTaken) {
          return res
            .status(403)
            .send({ success: false, data: 'Username already exist' })
        }

        let newUser = new User()

        newUser.name = req.body.name
        newUser.username = req.body.username
        newUser.email = req.body.email
        newUser.setPassword(req.body.password)
        newUser.phone = req.body.phone
        newUser.github = req.body.github
        newUser.linkedin = req.body.linkedin

        const user = await User.create(newUser)

        res.status(201).json({ success: true, data: user._id })
      } catch (error) {
        res.json({ success: false, data: error })
      }
      break
    default:
      res.json({ success: false, data: 'break error' })
      break
  }
}
