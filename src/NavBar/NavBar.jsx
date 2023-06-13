import { useState, useEffect } from "react";
import Login from "./Login";
import LogOut from "./LogOut";

const NavBar = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    const loggedInCheck = async () => {
      if (localStorage.getItem("accessToken")) {
        setLoginStatus(true);
      }
    };
    loggedInCheck();
  }, []);

  const logInStatusHandler = () => {
    setLoginStatus(!loginStatus);
  };

  return (
    <nav
      id="nav-items"
      className="flex justify-between px-9 text-white font-bold "
    >
      <div className="flex justify-between items-center w-1/3">
        <div className="Home cursor-pointer hover:underline">Home</div>
        <div className="Contact-us cursor-pointer hover:underline">
          Contact US
        </div>
        <div className="Reviews cursor-pointer hover:underline">Reviews</div>
      </div>
      {!loginStatus ? (
        <Login status={logInStatusHandler} />
      ) : (
        <LogOut status={logInStatusHandler} />
      )}
    </nav>
  );
};

export default NavBar;
