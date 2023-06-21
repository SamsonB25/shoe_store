import axios from "axios";
import jwtDecode from "jwt-decode";
import api from "../api/axios.js";
import { Link } from "react-router-dom";

const Shoe = ({ getClickedShoe, shoes, clickStatus, shoeName }) => {
  const shoeData = (event) => {
    getClickedShoe(event.target.alt);
  };

  const addToCartHandler = async (shoesName) => {
    try {
      // if token exist send shoe to cart
      const token = localStorage.getItem("accessToken");
      if (token != null) {
        const data = jwtDecode(token);
        const id = data.id;
        shoesName = shoeName;
        await api.post(
          `/api/addtocart/${id}`,
          {
            shoeName,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // if no token send request to unassigned id with no auth header
      } else {
        await api.post(`/api/addtocart/0`, {
          shoeName,
        });
      }
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  return (
    <>
      {!clickStatus ? (
        <>
          <h1 className=" flex mx-2 font-bold text-2xl underline">
            All Shoes
            <div className="mx-5 text-sm cursor-pointer hover:text-red-600">
              <Link to={"/browse/fancy"}>Fancy Shoes</Link>
            </div>
            <div className="mx-5 text-sm cursor-pointer hover:text-red-600">
              <Link to={"/browse/casual"}>Casual Shoes</Link>
            </div>
            <div className="mx-5 text-sm cursor-pointer hover:text-red-600">
              <Link to={"/browse/sport"}>Sport Shoes</Link>
            </div>
          </h1>
          {/* create shoe card with the data from the database*/}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* map over the shoes array to get individual shoe data*/}
            {shoes.map((shoe) => (
              <div key={shoe.id}>
                <div className="shoe-info rounded-md m-2">
                  <div className="shoe-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none hover:animate-pulse hover:cursor-pointer lg:h-50">
                    <img
                      src={shoe.image[0]}
                      alt={shoe.name}
                      onClick={shoeData} // display shoe modal when clicked
                    />
                  </div>
                  <div>
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
      ) : (
        <>
          {shoes.map((shoe) =>
            shoe.name == shoeName ? (
              <div
                key={shoe.id}
                className=" flex w-full mx-auto justify-center"
              >
                <div className="max-w-5xl w-full lg:flex justify-center">
                  <div className="h-52 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className=" w-full border-r border-b border-l border-grey-light  lg:border-t lg:border-grey-light rounded-b lg:rounded-b-none lg:rounded-l"
                    />
                  </div>
                  <div className=" text-white w-1/3 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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
                        onClick={getClickedShoe}
                        className="bottom-0 text-right cursor-pointer hover:underline"
                      >
                        Go Back
                      </div>
                      <div
                        onClick={addToCartHandler}
                        className="bottom-0 text-right cursor-pointer hover:underline"
                      >
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </>
      )}
    </>
  );
};

export default Shoe;
