import { useState } from "react";
import Shoes from "./ShoeComps/Shoes";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className=" text-white shoe-container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Shoes />
      </div>
    </div>
  );
}

export default App;
