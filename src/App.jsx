import { useState } from "react";
import Shoes from "./ShoeComps/Shoes";
import NavBar from "./NavBar/NavBar";
import Reviews from "./Reviews/Reviews";
import ReviewsContainer from "./Reviews/ReviewsContainer";

function App() {
  const [page, setPage] = useState("home");
  const username = localStorage.getItem("username");
  const [loggedIn, setLoggedIn] = useState(false);

  const setPageHandler = (pageName) => {
    setPage(pageName);
  };

  const isLoggedInCheck = () => {
    setLoggedIn((prevState) => (prevState = !prevState));
  };

  return (
    <div
      id="page-container"
      className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <NavBar
        homePage={() => setPageHandler("home")}
        reviewPage={() => setPageHandler("reviews")}
        logCheck={isLoggedInCheck}
      />
      <div className="text-white shoe-container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {page === "home" && <Shoes username={username} />}
        {page === "reviews" && <ReviewsContainer username={username} />}
      </div>
    </div>
  );
}

export default App;
