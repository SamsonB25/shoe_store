const FancyShoes = ({ fancyShoes, browsePage }) => {
  const fancyClickHandler = () => {
    browsePage();
    fancyShoes();
  };

  return (
    <div className="pt-2 pl-20 row-span-3 col-span-3 w-full h-full ">
      <div className="relative">
        <img
          src="https://i.imgur.com/PTfyTXZ.png"
          alt="fancy"
          className="border-2 border-rose-100  rounded-lg hover:opacity-80 cursor-pointer"
          onClick={fancyClickHandler}
        />
        <div className="absolute top-2 left-4 text-3xl font-bold z-50">
          STYLISH
        </div>
      </div>
    </div>
  );
};

export default FancyShoes;
