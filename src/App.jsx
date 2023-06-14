import { useState } from "react";
import Shoes from "./ShoeComps/Shoes";
import NavBar from "./NavBar/NavBar";
import Reviews from "./Reviews/Reviews";

function App() {
  const [page, setPage] = useState("home");

  const setPageHandler = (pageName) => {
    setPage(pageName);
  };

  return (
    <div
      id="page-container"
      className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <NavBar
        homePage={() => setPageHandler("home")}
        reviewPage={() => setPageHandler("reviews")}
      />
      <div className="text-white shoe-container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {page === "home" && <Shoes />}
        {page === "reviews" && <Reviews />}
      </div>
    </div>
  );
}

export default App;
