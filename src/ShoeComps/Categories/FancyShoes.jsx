import { Link } from "react-router-dom";

const FancyShoes = ({ fancyShoes, browsePage }) => {
  const fancyClickHandler = () => {
    browsePage();
    fancyShoes();
  };

  return (
    <div className=" md:pt-4 pl-20 row-span-3 col-span-3 w-full h-full ">
      <div className="relative">
        <Link to={"/browse/fancy"}>
          <img
            src="https://i.imgur.com/PTfyTXZ.png"
            alt="fancy"
            className="border-2 border-rose-100  rounded-lg hover:opacity-80 cursor-pointer"
          />
        </Link>
        <div className="absolute top-2 left-4 text-3xl font-bold z-50">
          STYLISH
        </div>
      </div>
    </div>
  );
};

export default FancyShoes;
