import jwt from "jsonwebtoken";



const cookieOptions = {
    maxAge: 90 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };

export const sendToken = (res,user,code, message) =>{
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);

    return res.status(code).cookie("gps_tracker_token", token, cookieOptions).json({
        success: true,
        user,
        message,
      });
}
// Create Token and saving in cookie

// export const sendtoken = async (user, statusCode, res, message) => {
//   const token = await user.generateToken();

//   // options for cookie
//   const options = {
//     expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
//     httpOnly: true,
//   };

//   res
//     .status(statusCode)
//     .cookie("cientme_token", token, options)
//     .json({
//       success: true,
//       message: message || "Ok Done",
//       user,
//     });
// };