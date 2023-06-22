import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/axios.js";

const FeaturedShoes = ({ getClickedShoe, clickStatus, shoeName }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const getFeaturedShoes = async () => {
      try {
        const response = await api.get("/api/featured");

        setShoes(response.data);
      } catch (error) {
        console.error(error?.response?.data);
      }
    };
    getFeaturedShoes();
  }, []);

  const shoeData = (event) => {
    clickStatus();
    getClickedShoe(event.target.alt);
  };
  return (
    <>
      <h1 className="ml-2 font-bold text-2xl">Featured Shoes</h1>
      {/* create shoe card with the data from the database*/}
      <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
        {/* map over the shoes array to get individual shoe data*/}
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <div className="shoe-info rounded-md m-2 ">
              <div className="shoe-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none hover:scale-105 hover:cursor-pointer lg:h-50">
                <img
                  src={shoe.image[0]}
                  alt={shoe.name}
                  onClick={shoeData} // display shoe modal when clicked
                />
              </div>
              <div className="">
                <div className="mt-4 flex justify-between font-bold md:truncate">
                  {shoe.name}
                  <div className=" font-normal">
                    <em>{shoe.price}</em>
                  </div>
                </div>
                <div className=" truncate">{shoe.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedShoes;
