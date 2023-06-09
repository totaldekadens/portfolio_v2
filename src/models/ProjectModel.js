import mongoose from 'mongoose'
const { Schema } = mongoose

const projectSchema = new Schema({
  title: String,
  description: String,
  shortDescription: String,
  github: String,
  website: String,
  slug: { type: String, unique: true, required: true },
  image: { src: String, alt: String },
  keys: [String],
  date: String,
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

export default mongoose.models.Project ||
  mongoose.model('Project', projectSchema)
