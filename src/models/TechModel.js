import mongoose from 'mongoose';
const { Schema } = mongoose;

const techSchema = new Schema({
    title: String,
    intro: String,
    slug: {type: String, unique: true, required: true},
    categories: [{ 
        title: String, 
        tech: [{
            title: String, 
            description: String
        }], 
    video: {src: String, format: String, alt: String} }],
});

export default mongoose.models.Tech || mongoose.model('Tech', techSchema);