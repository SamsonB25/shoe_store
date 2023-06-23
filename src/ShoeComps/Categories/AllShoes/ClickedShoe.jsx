import { useContext, useEffect, useState } from "react";
import api from "../../../api/axios.js";
import { useParams } from "react-router-dom";
import AuthContext from "../../../Authentication/AuthProvider.jsx";

const ClickedShoe = () => {
  const [shoes, setShoes] = useState([]);
  const { auth } = useContext(AuthContext);

  // uses params to get shoe id
  const { id } = useParams();
  const ShoeId = Number(id);
  // fetch shoe from database
  useEffect(() => {
    const getShoeData = async () => {
      try {
        const data = await api.get(`/api/shoe/${id}`);
        setShoes(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getShoeData();
  }, []);

  // go back to last page
  const backClickHandler = () => {
    history.back();
  };

  const addToCartHandler = async () => {
    try {
      auth.token &&
        (await api.post(
          `/api/addtocart`,
          { shoeId: ShoeId },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        ));
    } catch (error) {
      console.error(error?.response?.data);
      console.log(error?.response?.data);
    }
  };

  return (
    <>
      {shoes.length > 0 && (
        <>
          {shoes.map((shoe) => (
            <div key={shoe.id} className="flex flex-wrap justify-center">
              <div className="max-w-5xl w-full lg:flex justify-center">
                <div className="lg-h-72 lg:w-1/2 md:h-auto flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden">
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full border border-grey-light rounded-b lg:rounded-b-none lg:rounded-l "
                  />
                </div>
                <div className="w-full md:w-full md:border-l md:border-t md:border-grey-light bg-gray-900 rounded-b md:rounded-b-lg md:rounded-r p-4 flex flex-col justify-between">
                  <div className="mb-8 relative">
                    <p className="text-2xl font-bold text-grey-dark flex items-center">
                      <em>{shoe.price}</em>
                    </p>
                    <div className="font-bold text-xl mb-2">{shoe.name}</div>
                    <p className="text-grey-darker text-base">
                      {shoe.description}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div
                      className="text-right cursor-pointer hover:underline"
                      onClick={backClickHandler}
                    >
                      Go Back
                    </div>
                    <div
                      onClick={addToCartHandler}
                      className="text-right cursor-pointer hover:underline"
                    >
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ClickedShoe;
