import React from 'react';
import {useDispatch } from "react-redux";
import {logoutUser } from '../../Redux/Action/action'

const Logout = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUser());
        // alert.success("Logged out successfully");
      };
  return (
    <>
        <button onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default Logout