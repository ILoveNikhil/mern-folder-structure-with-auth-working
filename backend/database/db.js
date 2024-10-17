import mongoose, { connect } from "mongoose";
import { TryCatch } from "../middlewares/tryCatch.js";

if (!process.env.MONGO_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}
export const connectDB = TryCatch(
    async () => {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host} - DB_Name is : ${conn.connection.name}`);
    }
)