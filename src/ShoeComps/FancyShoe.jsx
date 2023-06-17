import axios from "axios";
import { useEffect, useState } from "react";

const FancyShoe = ({ sportShoes, casualShoes, allShoes }) => {
  const [fancyShoe, setFancyShoe] = useState([]);

  useEffect(() => {
    const displayFancy = async () => {
      try {
        const response = await axios.get("api/fancy");
        setFancyShoe(response.data);
      } catch (error) {
        console.error(error?.response?.data);
      }
    };
    displayFancy();
  }, []);

  const allShoeHandler = () => {
    allShoes();
  };

  return (
    <>
      <h1 className=" flex mx-2 font-bold text-2xl underline">
        Fancy Shoes
        <div className="mx-5 text-sm">Sport Shoes</div>
        <div className="mx-5 text-sm">Casual Shoes</div>
        <div
          className="mx-5 text-sm cursor-pointer hover:text-red-600"
          onClick={allShoeHandler}
        >
          All Shoes
        </div>
      </h1>
      {/* create shoe card with the data from the database*/}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* map over the shoes array to get individual shoe data*/}
        {fancyShoe.map((shoe) => (
          <div key={shoe.id}>
            <div className="shoe-info rounded-md m-2">
              <div className="shoe-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none hover:animate-pulse hover:cursor-pointer lg:h-50">
                <img
                  src={shoe.image[0]}
                  alt={shoe.name}
                  //   onClick={shoeData} // display shoe modal when clicked
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
  );
};

export default FancyShoe;
