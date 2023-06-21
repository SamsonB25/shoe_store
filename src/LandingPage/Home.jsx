import FeaturedShoes from "../ShoeComps/FeaturedShoes";
import CategoryContainer from "../ShoeComps/Categories/CategoryContainer";
import { useState } from "react";
import { NAVLINKS } from "../utils.js";
const Home = ({ shoeClickHandler, clickStatus }) => {
  const [navLinks, setNavLinks] = useState(NAVLINKS);
  return (
    <>
      <FeaturedShoes
        getClickedShoe={shoeClickHandler}
        clickStatus={clickStatus}
        // shoeName={shoeName}
      />
      <CategoryContainer
        browsePage={() => setPageHandler("browse")}
        allShoes={() => setContentHandler("shoes")}
        fancyShoes={() => setContentHandler("fancy")}
        sportShoes={() => setContentHandler("sport")}
        casualShoes={() => setContentHandler("casual")}
      />
    </>
  );
};

export default Home;
