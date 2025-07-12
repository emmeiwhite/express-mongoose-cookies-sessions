import mongoose from 'mongoose'

// Schema defines the structure of our document inside the MongoDB collection
const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    userOrder: { type: Object, default: {} }
  },
  { timestamps: true, minimize: false }
)

// Create Modal from Schema with model constructor function to interact with the DB

export const Person = mongoose.model('Person', personSchema)
