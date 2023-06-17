const HomeNav = ({ homePage, catContent }) => {
  const HomeClickHandler = () => {
    homePage();
    catContent();
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
