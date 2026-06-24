import mongoose from "mongoose"
const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialization: { type: String, default: "" },

  imageUrl: { type: String, default: null },
  imagePublicId: { type: String, default: null },

  experience: { type: String, default: "" },
  qualifications: { type: String, default: "" },
  location: { type: String, default: "" },
  about: { type: String, default: "" },

  fee: { type: Number, default: 0 },
  availability: {
    type: String,
    enum: ["Available", "Unavailable"], //restricts values only allowed values can be stored
    default: "Available",
  },

  schedule: { type: Map, of: [String], default: {} }, //here type is map and each value corresponding to each key is array of strings
  success: { type: String, default: "" },
  patients: { type: String, default: "" },
  rating: { type: Number, default: 0 },
},{
    timestamps:true // automatically adds two fields createdAt and updatedAt time of each doctor registering
});
doctorSchema.index({ name: "text", specialization:'text' }); //can search doctor by name and specialization
const Doctor = mongoose.models.Doctor || mongoose.model("Doctor",doctorSchema) // use doctor model if already exists or creates new doctor model from doctorSchema
export default Doctor;
