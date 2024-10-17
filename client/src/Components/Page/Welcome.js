import React from 'react';
import { useSelector } from "react-redux";
import Logout from '../Auth/Logout';


const Welcome = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
       <h1>Welcome</h1>
      <h4>
        Hi <span style={{ color: "green" }}>{user.name} </span>Ji
      </h4>
      <br /><br />
      <Logout/>
    </>
  )
}

export default Welcome