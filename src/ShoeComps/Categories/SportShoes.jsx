const SportShoes = ({ allShoes, fancyShoes, sportShoes, casualShoes }) => {
  return (
    <div className="col-span-2 w-9/12 h-full ">
      <div className="relative">
        <img
          src="https://i.imgur.com/s1zPzJi.png"
          alt="sport"
          className="border-2 border-rose-100  rounded-lg hover:opacity-80 cursor-pointer"
        />
        <div className="absolute top-2 left-4 text-3xl font-bold">SPORT</div>
      </div>
    </div>
  );
};

export default SportShoes;
