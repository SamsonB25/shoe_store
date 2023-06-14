const HomeNav = ({ homePage }) => {
  console.log(homePage);
  const HomeClickHandler = () => {
    homePage();
    console.log("it worked");
  };
  return (
    <div
      className="Home cursor-pointer hover:underline"
      onClick={HomeClickHandler}
    >
      Home
    </div>
  );
};

export default HomeNav;
