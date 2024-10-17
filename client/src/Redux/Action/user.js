import axios from "axios";
// import {server} from '../store'

// signup
export const SignupUser =
  (name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "SignupRequest",
      });
      const { data } = await axios.post(
        `/api/v1/user/signup`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "SignupSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "SignupFailure",
        payload: error.response.data.message,
      });
    }
  };
//login
export const LoginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(
      `/api/v1/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      }
    );
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

//loadUser -- Get user data
export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
      const { data } = await axios.get(`/api/v1/user/me`);
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoadUserFailure",
        payload: error.response.data.message,
      });
    }
  };
  
  // logout
  export const logoutUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LogoutUserRequest",
      });
      await axios.get(`/api/v1/user/logout`);
      dispatch({
        type: "LogoutUserSuccess",
      });
    } catch (error) {
      dispatch({
        type: "LogoutUserFailure",
        payload: error.response.data.message,
      });
    }
  };