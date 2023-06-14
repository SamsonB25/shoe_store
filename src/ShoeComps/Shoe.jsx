import React, { useEffect, useState } from "react";

const Shoe = ({ getClickedShoe, shoes, clickStatus, shoeId }) => {
  const shoeData = (event) => {
    getClickedShoe(event.target.alt);
  };

  return (
    <>
      {!clickStatus ? (
        <>
          <h1 className="ml-2 font-bold text-2xl">All Shoes</h1>
          {/* create shoe card with the data from the database*/}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* map over the shoes array to get individual shoe data*/}
            {shoes.map((shoe) => (
              <div key={shoe.id}>
                <div className="shoe-info rounded-md m-2">
                  <div className="shoe-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none hover:scale-105 hover:cursor-pointer lg:h-50">
                    <img
                      src={shoe.image[0]}
                      alt={shoe.id}
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
            shoe.id == shoeId ? (
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
                    <div
                      onClick={getClickedShoe}
                      className="bottom-0 text-right cursor-pointer hover:underline"
                    >
                      Back to inventory
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
