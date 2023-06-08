import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// axios.create({ baseURL: "http://localhost:4000" });
function App() {
  const [shoes, setShoes] = useState("");
  useEffect(() => {
    const getShoeData = async () => {
      const response = await axios.get("/api/shoes");
      setShoes(response.data);
    };
    getShoeData();
  }, []);
  setTimeout(() => {
    shoes.map((shoe) => console.log(shoe));
  }, 1000);

  return (
    <>
      <h1>shoes</h1>
    </>
  );
}

export default App;
