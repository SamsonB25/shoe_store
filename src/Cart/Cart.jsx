import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = async () => {
      const data = await axios.get(`/api/cart/${id}`);
    };
  });
};
