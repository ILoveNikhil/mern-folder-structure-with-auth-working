import mongoose, { Schema, model} from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required: true},
        email:{type:String, required: true},
        password: { type: String, required: true, select: false, },
        locations: [{
            type: {
              type: String,
              enum: ['Point'],
              default: 'Point'
            },
            coordinates: {
              type: [Number],
              required: true
            },
            timestamp: {
              type: Date,
              default: Date.now
            }
          }]
    },
    {
        timestamps: true,
    }
)

// const User = mongoose.model("User", userSchema);
export const User = mongoose.models.User || model("User", userSchema);