import { Link } from "react-router-dom";
import CasualShoes from "./CasualShoes";
import FancyShoes from "./FancyShoes";
import SportShoes from "./SportShoes";
import Shoes from "../Shoes";

const CatagoryContainer = () => {
  return (
    <>
      <h1 className="px-2 hover:underline cursor-pointer text-2xl font-bold">
        <Link to={"/browse/shoes"}>Browse All Shoes</Link>
      </h1>
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 ">
        <div className=" grid grid-row-9 grid-flow-col gap-4">
          <FancyShoes />
          <SportShoes />
          <CasualShoes />
        </div>
      </div>
    </>
  );
};

export default CatagoryContainer;
