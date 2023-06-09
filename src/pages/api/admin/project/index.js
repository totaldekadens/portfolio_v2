import dbConnect from '@/lib/dbConnect'
import Project from '@/models/ProjectModel'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  if (!req.body) {
    return res.status(400).json({ success: false, data: 'Check body' })
  }

  switch (method) {
    case 'POST':
      try {
        // Fix Validation of slug

        let newProject = new Project(req.body)

        const project = await Project.create(newProject)
        res.status(201).json({ success: true, data: project })
      } catch (error) {
        res.status(400).json({ success: false, message: error })
      }
      break

    case 'PUT':
      try {
        // Fix update
        res.status(200).json({ success: true, data: 'project' })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break
    default:
      res.status(400).json({ success: false, data: 'Break error' })
      break
  }
}
