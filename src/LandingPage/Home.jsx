import FeaturedShoes from "../ShoeComps/FeaturedShoes";
import CategoryContainer from "../ShoeComps/Categories/CategoryContainer";
const Home = ({ shoeClickHandler, clickStatus }) => {
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
