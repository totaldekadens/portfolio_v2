import dbConnect from '@/lib/dbConnect'
import Tech, { TechDocument } from '@/models/TechModel'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await dbConnect()

  if (!req.body) {
    return res.status(400).json({ success: false, data: 'Check body' })
  }

  switch (method) {
    case 'POST':
      try {
        // Fix Validation of slug

        let newTech: TechDocument = new Tech(req.body)

        const tech = await Tech.create(newTech)
        res.status(201).json({ success: true, data: tech })
      } catch (error) {
        res.status(400).json({ success: false, message: error })
      }
      break

    case 'PUT':
      try {
        // Fix update
        res.status(200).json({ success: true, data: 'tech' })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break
    default:
      res.status(400).json({ success: false, data: 'Break error' })
      break
  }
}
