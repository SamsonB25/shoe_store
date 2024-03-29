import { Link } from "react-router-dom";

const SportShoes = () => {
  return (
    <div className="col-span-2 w-9/12 h-full ">
      <div className="relative">
        <Link to={"/browse/sport"}>
          <img
            src="https://i.imgur.com/s1zPzJi.png"
            alt="sport"
            className="border-2 border-rose-100  rounded-lg hover:opacity-80 cursor-pointer"
          />
        </Link>
        <div className="absolute top-2 left-4 lg:text-3xl md:text-2xl sm:text-lg font-bold z-50">
          SPORT
        </div>
      </div>
    </div>
  );
};

export default SportShoes;
