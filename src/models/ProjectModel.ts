import mongoose from 'mongoose'
const { Schema } = mongoose

const projectSchema = new Schema({
  title: { type: String },
  description: { type: String },
  shortDescription: String,
  github: String,
  website: String,
  slug: { type: String, unique: true, required: true },
  image: { src: String, alt: String },
  keys: [String],
  date: { type: String },
  hidden: Boolean,
  sections: [
    {
      title: String,
      subTitle: String,
      description: String,
      images: [
        {
          src: String,
          alt: String,
        },
      ],
      video: { src: String, format: String, alt: String },
    },
  ],
})

export interface ProjectDocument {
  title: string
  description: string
  shortDescription?: string
  github?: string
  website?: string
  slug: string
  image: { src: string; alt: string }
  keys: string[]
  date: string
  hidden: boolean
  sections: [
    {
      title?: string
      subTitle?: string
      description?: string
      images?: [
        {
          src: string
          alt: string
        }
      ]
      video?: { src: string; format: string; alt: string }
    }
  ]
}

export default mongoose.models.Project ||
  mongoose.model('Project', projectSchema)
