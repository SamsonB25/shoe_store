import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="Home cursor-pointer hover:underline">
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default HomeNav;
