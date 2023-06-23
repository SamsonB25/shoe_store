import api from "../../api/axios.js";
import { useState } from "react";
import AuthContext from "../../Authentication/AuthProvider.jsx";

const RegisterForm = ({ isOpen, onClose, status }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // username input value
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  // email input value
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  // password input value
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const accountHandler = (event) => {
    event.preventDefault();
    hasAccount();
  };

  // form data to log user in
  const LoginFormHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/api/users", {
        username,
        email,
        password,
      });

      // set token and username in local storage for future use
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      // Clear the username and password fields
      setUsername("");
      setEmail("");
      setPassword("");
      // close modal

      status();
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
        <h2 className="text-xl font-bold mb-2">Registration Form</h2>
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
          <label htmlFor="email">E-mail</label>
          <br />
          <input
            type="email"
            name="Email"
            id="email"
            value={email}
            placeholder="example@email.com"
            onChange={emailHandler}
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
              Register
            </button>
            <button
              className="rounded bg-gray-500 mt-1 p-1 justify-between text-white font-normal"
              onClick={accountHandler}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
