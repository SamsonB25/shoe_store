import React, { useEffect, useState } from "react";
import axios from "axios";

const Shoes = () => {
  // setting shoes initial state to an empty array so the map method doesn't error out
  const [shoes, setShoes] = useState([]);
  const [status, setStatus] = useState("");

  // get request from my api to set the initial render of the webpage
  useEffect(() => {
    const getShoeData = async () => {
      // retrieving all the shoes from the database
      const response = await axios.get("/api/shoes");
      // setting "shoes" to the data from the database
      setShoes(response.data);
    };
    // invoking the getShoeData function to load shoes
    getShoeData();
  }, []);

  const shoeClickHandler = () => {
    setStatus("shoe clicked");
    console.log("shoe clicked");
  };

  console.log(shoes.map((shoe) => shoe));
  return (
    <>
      <h1 className="ml-2">Featured Shoes</h1>
      {/* create shoe card with the data from the database*/}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* map over the shoes array to get individual shoe data*/}
        {shoes.map((shoe) => (
          <div key={shoe.id} className="group">
            <div
              className="shoe-info rounded-md m-2"
              onClick={shoeClickHandler}
            >
              <div className="shoe-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 group-hover:cursor-pointer lg:h-50">
                <img src={shoe.shoe_img[0]} alt={shoe.shoe_name} />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  {shoe.shoe_name}
                  <p>{shoe.shoe_price}</p>

                  <p>{shoe.shoe_desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shoes;
