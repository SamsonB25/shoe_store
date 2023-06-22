import FeaturedShoes from "../ShoeComps/FeaturedShoes";
import CategoryContainer from "../ShoeComps/Categories/CategoryContainer";
import { useState } from "react";

const Home = ({ shoeClickHandler, clickStatus }) => {
  return (
    <>
      <FeaturedShoes
        getClickedShoe={shoeClickHandler}
        clickStatus={clickStatus}
        // shoeName={shoeName}
      />
      <CategoryContainer />
    </>
  );
};

export default Home;
