import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedShoes = ({ getClickedShoe, clickStatus, shoeId }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const getFeaturedShoes = async () => {
      const response = await axios.get("/api/shoes/featured");

      setShoes(response.data);
    };
    getFeaturedShoes();
  }, []);

  const shoeData = (event) => {
    getClickedShoe(event.target.alt);
  };
  return (
    <>
      <h1 className="ml-2 font-bold text-2xl">Featured Shoes</h1>
      {/* create shoe card with the data from the database*/}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* map over the shoes array to get individual shoe data*/}
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <div className="shoe-info rounded-md m-2">
              <div className="shoe-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none hover:scale-105 hover:cursor-pointer lg:h-50">
                <img
                  src={shoe.image[0]}
                  alt={shoe.id}
                  onClick={shoeData} // display shoe modal when clicked
                />
              </div>
              <div className="">
                <div className="mt-4 flex justify-between font-bold">
                  {shoe.name}
                  <div className=" font-normal">
                    <em>{shoe.price}</em>
                  </div>
                </div>
                <div>{shoe.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedShoes;
