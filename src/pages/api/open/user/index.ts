import caseInsensitive from '@/lib/caseCheck'
import dbConnect from '@/lib/dbConnect'
import User, { UserDocument } from '@/models/UserModel'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        if (!req.body) {
          return res.status(400).json({ success: false, data: 'Bad request' })
        }
        const userTaken: UserDocument | undefined = await User.findOne({
          username: caseInsensitive(req.body.username),
        })
        if (userTaken) {
          return res
            .status(403)
            .send({ success: false, data: 'Username already exist' })
        }

        let newUser: UserDocument = new User(req.body)

        newUser.setPassword(req.body.password)
        delete newUser.password

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
