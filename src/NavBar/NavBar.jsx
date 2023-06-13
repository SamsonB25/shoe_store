import Login from "./Login";

const NavBar = ({ logIn }) => {
  return (
    <nav id="nav-items" className="flex justify-between py-4 ">
      <div className="Home cursor-pointer">Home</div>
      <div className="Contact-us cursor-pointer">Contact US</div>
      <div className="Reviews cursor-pointer">Reviews</div>
      <Login logIn={logIn} />
    </nav>
  );
};

export default NavBar;
