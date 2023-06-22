import { useState } from "react";
import Shoes from "./ShoeComps/Categories/AllShoes/Shoes";
import NavBar from "./NavBar/NavBar";
import ReviewsContainer from "./NavBar/ReviewsTab/Reviews/ReviewsContainer";
import Footer from "./Footer/Footer";
import FancyShoe from "./ShoeComps/Categories/Fancy/FancyShoe";
import SportShoe from "./ShoeComps/Categories/Sport/SportShoe";
import CasualShoe from "./ShoeComps/Categories/Casual/CasualShoe";
import { Route, Routes } from "react-router-dom";
import Home from "./LandingPage/Home";
import ClickedShoe from "./ShoeComps/Categories/AllShoes/ClickedShoe";

function App() {
  const [clickStatus, setStatus] = useState(false);
  const [shoeName, setShoeName] = useState("");

  const shoeClickHandler = (name) => {
    setStatus(!clickStatus);
    setShoeName(name);
  };

  return (
    <div
      id="page-container"
      className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen w-screen"
    >
      <NavBar />
      <div className="text-white shoe-container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
          <Route path="/shoe/:id" element={<ClickedShoe />} />
          <Route path="/browse/shoes" element={<Shoes />} />
          <Route path="/browse/fancy" element={<FancyShoe />} />
          <Route path="/browse/casual" element={<CasualShoe />} />
          <Route path="/browse/sport" element={<SportShoe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
