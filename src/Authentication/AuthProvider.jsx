import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if ((token, username)) {
      setAuth({ token, username });
    }
  }, []);

  // removes items from local storgage when log out event triggers
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setAuth({});
  };

  // logs user in and sets token and username in local storage
  const handleLogin = async (username, password) => {
    const response = await api.post("/api/login", { username, password });
    console.log(response.data);
    const token = response?.data?.token;

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);

    setAuth({ token });
    return true;
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
