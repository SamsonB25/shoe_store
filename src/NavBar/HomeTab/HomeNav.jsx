const HomeNav = ({ homePage }) => {
  const HomeClickHandler = () => {
    homePage();
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
