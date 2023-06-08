import Shoes from "./ShoeComps/Shoes";

// axios.create({ baseURL: "http://localhost:4000" });
function App() {
  return (
    <div className="shoe-container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <Shoes />
    </div>
  );
}

export default App;
