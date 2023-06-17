import { useState } from "react";
import Shoes from "./ShoeComps/Shoes";
import NavBar from "./NavBar/NavBar";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import CategoryContainer from "./ShoeComps/Categories/CategoryContainer";
import FeaturedShoes from "./ShoeComps/FeaturedShoes";
import Footer from "./Footer";
import FancyShoe from "./ShoeComps/FancyShoe";

function App() {
  const [page, setPage] = useState("home");
  const username = localStorage.getItem("username");
  const [clickStatus, setStatus] = useState(false);
  const [shoeName, setShoeName] = useState("");
  const [content, setContent] = useState("categories");

  const shoeClickHandler = (name) => {
    setStatus(!clickStatus);
    setShoeName(name);
  };

  const setPageHandler = (pageName) => {
    setPage(pageName);
    console.log(pageName);
  };

  const setContentHandler = (category) => {
    setContent(category);
    console.log(category);
  };

  const isLoggedInCheck = () => {
    setLoggedIn((prevState) => (prevState = !prevState));
  };

  return (
    <div
      id="page-container"
      className=" mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen w-screen"
    >
      <NavBar
        homePage={() => setPageHandler("home")}
        catContent={() => setContentHandler("categories")}
        reviewPage={() => setPageHandler("reviews")}
        logCheck={isLoggedInCheck}
      />
      <div className="text-white shoe-container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex-1">
        {page === "home" && (
          <>
            {content === "categories" && (
              <>
                <FeaturedShoes
                  getClickedShoe={shoeClickHandler}
                  clickStatus={clickStatus}
                  shoeName={shoeName}
                />
                <CategoryContainer
                  browsePage={() => setPageHandler("browse")}
                  allShoes={() => setContentHandler("shoes")}
                  fancyShoes={() => setContentHandler("fancy")}
                  sportShoes={() => setContentHandler("sport")}
                  casualShoes={() => setContentHandler("casual")}
                />
              </>
            )}
          </>
        )}

        {page === "browse" && (
          <>
            {content === "shoes" && <Shoes />}
            {content === "fancy" && (
              <FancyShoe
                allShoes={() => setContentHandler("shoes")}
                sportShoes={() => setContentHandler("sport")}
                casualShoes={() => setContentHandler("casual")}
              />
            )}
          </>
        )}

        {page === "reviews" && <ReviewsContainer username={username} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
