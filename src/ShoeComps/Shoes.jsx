import Shoe from "./Shoe";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedShoes from "./FeaturedShoes";

const Shoes = ({ username }) => {
  // setting shoes initial state to an empty array so the map method doesn't error out
  const [shoes, setShoes] = useState([]);
  const [clickStatus, setStatus] = useState(false);
  const [shoeName, setShoeName] = useState("");

  // get request from my api to set the initial render of the webpage
  useEffect(() => {
    const getShoeData = async () => {
      // retrieving all the shoes from the database
      try {
        const response = await axios.get("/api/shoes");
        // setting "shoes" to the data from the database
        setShoes(response.data);
      } catch (error) {
        console.error(error?.response?.data);
      }
    };
    // invoking the getShoeData function to load shoes
    getShoeData();
  }, []);

  // get shoe Name form shoe component
  // get click status from shoe component
  const shoeClickHandler = (name) => {
    setStatus(!clickStatus);
    setShoeName(name);
  };

  return (
    <>
      {!clickStatus ? (
        <Shoe
          getClickedShoe={shoeClickHandler}
          clickStatus={clickStatus}
          shoes={shoes}
          shoeName={shoeName}
          username={username}
        />
      ) : (
        <Shoe
          getClickedShoe={shoeClickHandler}
          clickStatus={clickStatus}
          shoes={shoes}
          shoeName={shoeName}
          username={username}
        />
      )}
    </>
  );
};

export default Shoes;
