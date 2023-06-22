import { Link } from "react-router-dom";

const CasualShoes = ({ casualShoes, browsePage }) => {
  const casualClickHandler = () => {
    browsePage();
    casualShoes();
  };
  return (
    <div className=" row-span-2 col-span-2 w-9/12 h-full">
      <div className="relative">
        <Link to={"/browse/casual"}>
          <img
            src="https://i.imgur.com/ISDBmJe.png"
            alt="casual"
            className="border-2 border-rose-100 rounded-lg hover:opacity-80 cursor-pointer"
          />
        </Link>
        <div className="absolute top-2 left-4 lg:text-3xl md:text-2xl sm:text-lg font-bold z-50">
          CASUAL
        </div>
      </div>
    </div>
  );
};

export default CasualShoes;
