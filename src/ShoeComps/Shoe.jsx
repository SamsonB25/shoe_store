import React, { useEffect, useState } from "react";

const Shoe = ({ getClickedShoe, shoes, status, shoeId }) => {
  const shoeData = (event) => {
    getClickedShoe(event.target.alt);
  };

  const statusHandler = () => {};
  return (
    <>
      {!status ? (
        <>
          <h1 className="ml-2">Featured Shoes</h1>
          {/* create shoe card with the data from the database*/}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* map over the shoes array to get individual shoe data*/}
            {shoes.map((shoe) => (
              <div key={shoe.id}>
                <div className="shoe-info rounded-md m-2">
                  <div className="shoe-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none hover:opacity-75 hover:cursor-pointer lg:h-50">
                    <img
                      src={shoe.shoe_img[0]}
                      alt={shoe.id}
                      onClick={shoeData} // display shoe modal when clicked
                    />
                  </div>
                  <div>
                    <div className="mt-4 flex justify-between font-bold">
                      {shoe.shoe_name}
                      <div className=" font-normal">
                        <em>{shoe.shoe_price}</em>
                      </div>
                    </div>
                    <div>{shoe.shoe_desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <>
            {shoes.map((shoe) =>
              shoe.id == shoeId ? (
                <div key={shoe.id} className=" w-13">
                  <span
                    onClick={getClickedShoe}
                    className=" text-red-600 cursor-pointer font-bold m-1"
                  >
                    Back to inventory
                  </span>
                  <div className=" flex max-w-7xl">
                    <div className="m-1">
                      <img
                        src={shoe.shoe_img}
                        alt={shoe.shoe_name}
                        className=" aspect-h-1 aspect-w-1 w-full"
                      />
                    </div>
                    <div className=" text-3xl">{shoe.shoe_price}</div>
                  </div>
                </div>
              ) : null
            )}
          </>
        </>
      )}
    </>
  );
};

export default Shoe;
