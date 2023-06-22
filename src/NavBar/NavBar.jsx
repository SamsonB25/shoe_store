import { useState, useEffect } from "react";
import Login from "./Login_Out/Login";
import ReviewsNav from "./ReviewsTab/ReviewsNav";
import HomeNav from "./HomeTab/HomeNav";
import ProfileDropdown from "./Profile/Profile";

const NavBar = ({ homePage, reviewPage, usersname, logCheck, catContent }) => {
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
      className="flex flex-wrap sm:flex-no-wrap justify-between px-9 text-white font-bold"
    >
      <div className="flex justify-between items-center  md:w-1/2 sm:w-auto ">
        <HomeNav homePage={homePage} catContent={catContent} />
        <div className="Contact-us cursor-pointer hover:underline mt-4 sm:mt-0 sm:ml-4">
          <a href="https://www.linkedin.com/in/samson-brown/" target="_blank">
            Contact US
          </a>
        </div>
        <ReviewsNav reviewPage={reviewPage} />
      </div>
      {!loginStatus ? (
        <Login status={logInStatusHandler} logCheck={logCheck} />
      ) : (
        <ProfileDropdown status={logInStatusHandler} logCheck={logCheck} />
      )}
    </nav>
  );
};

export default NavBar;
