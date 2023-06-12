import mongoose from 'mongoose'
const { Schema } = mongoose

const techSchema = new Schema<TechDocument>({
  title: { type: String, unique: true, required: true },
  intro: String,
  slug: { type: String, unique: true, required: true },
  categories: [
    {
      title: { type: String, unique: true, required: true },
      tech: [
        {
          title: { type: String, unique: true, required: true },
          description: String,
        },
      ],
    },
  ],
})

export interface TechCategory {
  title: string
  tech: [
    {
      title: string
      description?: string
    }
  ]
}

export interface TechDocument {
  title: string
  intro?: string
  slug: string
  categories: TechCategory[]
}

export default mongoose.models.Tech || mongoose.model('Tech', techSchema)
