import dbConnect from '@/lib/dbConnect'
import User from '@/models/UserModel'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const user = await User.findOne({ _id: id })
        if (!user) {
          return res
            .status(400)
            .json({ success: false, data: 'User not found' })
        }
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break
    case 'PUT':
      try {
        // Fix update

        res
          .status(200)
          .json({ success: true, data: 'User is successfully deleted' })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break
    case 'DELETE':
      try {
        const user = await User.findOne({ _id: id })
        if (!user) {
          return res
            .status(400)
            .json({ success: false, data: 'User not found' })
        }

        const deletedUser = await User.deleteOne({ _id: id })

        if (deletedUser.deletedCount < 1) {
          return res.status(400).json({
            success: false,
            data: 'User deleted in Stripe but not in DB',
          })
        }

        res
          .status(200)
          .json({ success: true, data: 'User is successfully deleted' })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
