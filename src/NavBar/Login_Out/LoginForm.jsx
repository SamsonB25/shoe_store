import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ isOpen, onClose, hasAccount, status, logCheck }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // username input value
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  // password input value
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const noAccountHandler = (event) => {
    event.preventDefault();
    hasAccount();
  };

  // form data to log user in
  const LoginFormHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/shoes/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response data as needed
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.token);
      localStorage.setItem("username", response.data.username);
      // Clear the username and password fields
      setUsername("");
      setPassword("");
      // close LoginForm

      status();
      logCheck();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className=" text-black fixed inset-0 z-40 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" relative bg-white p-6 rounded shadow-md z-50">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 font-bold"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-2 cursor-pointer hover:underline">
          Login Form
        </h2>
        <div className="flex">
          <form className="flex-col" onSubmit={LoginFormHandler}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="Username"
              id="username"
              value={username}
              placeholder="Username"
              onChange={usernameHandler}
              className="bg-gray-400 rounded p-1"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="Password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={passwordHandler}
              className="bg-gray-400 rounded p-1"
            />
            <br />
            <div className="flex justify-between">
              <button
                onClick={LoginFormHandler}
                className="rounded bg-blue-700 mt-1 p-1 text-white font-normal"
              >
                Login
              </button>
              <button
                className="rounded bg-gray-500 mt-1 p-1 text-white font-normal"
                onClick={noAccountHandler}
              >
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
