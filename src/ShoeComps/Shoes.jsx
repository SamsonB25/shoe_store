import Shoe from "./Shoe";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedShoes from "./FeaturedShoes";

const Shoes = () => {
  // setting shoes initial state to an empty array so the map method doesn't error out
  const [shoes, setShoes] = useState([]);
  const [clickStatus, setStatus] = useState(false);
  const [shoeId, setShoeID] = useState("");

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

  // get shoe id form shoe component
  // get click status from shoe component
  const shoeClickHandler = (id) => {
    setStatus(!clickStatus);
    setShoeID(id);
  };

  return (
    <>
      {!clickStatus ? (
        <>
          <FeaturedShoes
            getClickedShoe={shoeClickHandler}
            clickStatus={clickStatus}
            shoeId={shoeId}
          />
          <Shoe
            getClickedShoe={shoeClickHandler}
            clickStatus={clickStatus}
            shoes={shoes}
            shoeId={shoeId}
          />
        </>
      ) : (
        <Shoe
          getClickedShoe={shoeClickHandler}
          clickStatus={clickStatus}
          shoes={shoes}
          shoeId={shoeId}
        />
      )}
    </>
  );
};

export default Shoes;
