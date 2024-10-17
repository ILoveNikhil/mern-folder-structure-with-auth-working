import React from 'react'
import { useSelector } from "react-redux";


const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
       <h1>Hi, {user.name} Ji</h1>
      <br />
      <br />
      <h5>User Details </h5>
      <h6>Email: {user.email}</h6>
      <hr />
    </>
  )
}

export default Profile