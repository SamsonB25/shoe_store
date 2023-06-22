import api from "../../../api/axios.js";
import { useEffect } from "react";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = async () => {
      const data = await api.get(`/api/cart/${id}`);
    };
  });
};
