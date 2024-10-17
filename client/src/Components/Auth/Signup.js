import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {SignupUser} from '../../Redux/Action/action'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "name : ",
      name,
      "email : ",
      email,
      "password : ",
      password
    );
    dispatch(SignupUser(name, email, password));
  };

  useEffect(() => {
    if (error) {
      console.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error]);
  //

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/">
          <h4>Already Signed Up? Login Now</h4>
        </Link>

        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
    </>
  )
}

export default Signup