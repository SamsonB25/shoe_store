import CasualShoes from "./CasualShoes";
import FancyShoes from "./FancyShoes";
import SportShoes from "./SportShoes";

const CatagoryContainer = ({
  fancyShoes,
  sportShoes,
  casualShoes,
  allShoes,
  browsePage,
}) => {
  const browseAllHandler = () => {
    browsePage();
    allShoes();
  };

  return (
    <>
      <h1
        className="px-2 hover:underline cursor-pointer text-2xl font-bold"
        onClick={browseAllHandler}
      >
        Browse All Shoes
      </h1>
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 ">
        <div className=" grid grid-row-9 grid-flow-col gap-4">
          <FancyShoes fancyShoes={fancyShoes} browsePage={browsePage} />
          <SportShoes sportShoes={sportShoes} browsePage={browsePage} />
          <CasualShoes casualShoes={casualShoes} browsePage={browsePage} />
        </div>
      </div>
    </>
  );
};

export default CatagoryContainer;
