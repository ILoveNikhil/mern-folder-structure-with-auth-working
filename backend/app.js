import express from 'express'
import { config } from "dotenv";
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'


// app 
export const app = express()

// dotenv
config({ path: "./config/.env" })

// Using Middlewares Here
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({limit: "50mb", extended: true }))
app.use(cookieParser())

//cors
app.use(cors({
      origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true // If you need to include cookies in requests
}));
 app.options('*', cors()); // Allow preflight for all routes

// Logging Middleware (Optional for debugging)
app.use((req, res, next) => { 
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// route
app.use("/api/v1/user", userRouter)