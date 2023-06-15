import { useState, useEffect } from "react";
import Login from "./Login_Out/Login";
import ReviewsNav from "./ReviewsTab/ReviewsNav";
import HomeNav from "./HomeTab/HomeNav";
import ProfileDropdown from "./Profile/Profile";

const NavBar = ({ homePage, reviewPage, usersname, logCheck }) => {
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
        <HomeNav homePage={homePage} />
        <div className="Contact-us cursor-pointer hover:underline">
          Contact US
        </div>
        <ReviewsNav reviewPage={reviewPage} />
      </div>
      {!loginStatus ? (
        <Login status={logInStatusHandler} logCheck={logCheck} />
      ) : (
        // <LogOut status={logInStatusHandler} logCheck={logCheck} />
        <ProfileDropdown status={logInStatusHandler} logCheck={logCheck} />
      )}
    </nav>
  );
};

export default NavBar;
