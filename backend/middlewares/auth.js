import { ErrorHandler } from "../utils/errorHandler.js";
import { TryCatch } from "../middlewares/tryCatch.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const isAuthenticatedUser = TryCatch(async (req, res, next) => {
  const { gps_tracker_token } = req.cookies;
 
  if (!gps_tracker_token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(gps_tracker_token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData._id);

  next();
});

// export const authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return next(
//         new ErrorHandler(
//           `Role: ${req.user.role} is not allowed to access this resouce `,
//           403
//         )
//       );
//     }
//     next();
//   };
// };