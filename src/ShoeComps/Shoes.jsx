import Shoe from "./Shoe";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Shoes = () => {
  // setting shoes initial state to an empty array so the map method doesn't error out
  const [shoes, setShoes] = useState([]);
  const [status, setStatus] = useState(false);
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

  // sends shoe id tp the shoe component
  // also updates status in shoe component
  const shoeClickHandler = (id) => {
    setStatus(!status);
    setShoeID(id);
  };

  return (
    <Shoe
      getClickedShoe={shoeClickHandler}
      status={status}
      shoes={shoes}
      shoeId={shoeId}
    />
  );
};

export default Shoes;
