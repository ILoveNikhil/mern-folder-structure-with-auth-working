import { TryCatch } from "../middlewares/tryCatch.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import { User } from '../models/user.js'



// Create a new user(register) and save it to the database and save token in cookie
export const register = TryCatch(async (req, res, next) => {
    const {  name, email, password } = req.body;


    const requiredFields = ['email', 'password'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
        const errorMessages = missingFields.map(field => `${field} is required`).join(', ');
        return next(new ErrorHandler(`${errorMessages}`, 400));
    }
   
    let user = await User.findOne({ email });

    if (user) {
        return next(new ErrorHandler("User already exists", 400));
    };
     // Create and Save the user to the database
    user =  await User.create({
        name, email, password
    });
     
    sendToken(res, user, 201, "User created");
});

// login 
export const login = TryCatch(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));    

    sendToken(res, user, 200, "User Login");
});

// Logout User
export const logout = TryCatch(async (req, res, next) => {
    res.cookie("gps_tracker_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });

// Get User Detail
export const getUserDetails = TryCatch(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  });