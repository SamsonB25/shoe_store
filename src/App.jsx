import { useState } from "react";
import Shoes from "./ShoeComps/Shoes";
import NavBar from "./NavBar/NavBar";
import LoginForm from "./NavBar/LoginForm";

function App() {
  const [logIn, setLogIn] = useState(false);
  const logInHandler = () => {
    setLogIn(!logIn);
    console.log("logging in");
  };
  return (
    <div
      id="page-container"
      className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <NavBar logIn={logInHandler} />
      {/* <LoginForm /> */}
      <div className=" text-white shoe-container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Shoes />
      </div>
    </div>
  );
}

export default App;
