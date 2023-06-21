import { useState } from "react";
import Shoes from "./ShoeComps/Shoes";
import NavBar from "./NavBar/NavBar";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import Footer from "./Footer";
import FancyShoe from "./ShoeComps/FancyShoe";
import SportShoe from "./ShoeComps/SportShoe";
import CasualShoe from "./ShoeComps/CasualShoe";
import { Route, Routes } from "react-router-dom";
import Home from "./LandingPage/Home";
import SportShoes from "./ShoeComps/Categories/SportShoes";
import FancyShoes from "./ShoeComps/Categories/FancyShoes";
import CasualShoes from "./ShoeComps/Categories/CasualShoes";

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

  return (
    <div
      id="page-container"
      className=" mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen w-screen"
    >
      <NavBar />
      <div className="text-white shoe-container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                shoeClickHandler={shoeClickHandler}
                clickStatus={shoeClickHandler}
              />
            }
          />
          <Route path="/reviews" element={<ReviewsContainer />} />
          <Route path="/browse/shoes" element={<Shoes />} />
          <Route path="/browse/fancy" element={<FancyShoe />} />
          <Route path="/browse/casual" element={<CasualShoe />} />
          <Route path="/browse/sport" element={<SportShoe />} />
        </Routes>

        {/* {page === "browse" && (
          <>
            {content === "shoes" && (
              <Shoes
                sportShoes={() => setContentHandler("sport")}
                casualShoes={() => setContentHandler("casual")}
                fancyShoes={() => setContentHandler("fancy")}
              />
            )}
            {content === "fancy" && (
              <FancyShoe
                allShoes={() => setContentHandler("shoes")}
                sportShoes={() => setContentHandler("sport")}
                casualShoes={() => setContentHandler("casual")}
              />
            )}
            {content === "sport" && (
              <SportShoe
                allShoes={() => setContentHandler("shoes")}
                fancyShoes={() => setContentHandler("fancy")}
                casualShoes={() => setContentHandler("casual")}
              />
            )}
            {content === "casual" && (
              <CasualShoe
                allShoes={() => setContentHandler("shoes")}
                fancyShoes={() => setContentHandler("fancy")}
                sportShoes={() => setContentHandler("sport")}
              />
            )}
          </>
        )}

        {page === "reviews" && <ReviewsContainer username={username} />} */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
