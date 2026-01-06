import "./App.css";
import Display from "./components /Display";
import Hero from "./components /Hero";

function App() {
  
  return (
    <>
      <div className="wrapper">
        {/* hero Section */}
        <Hero />
        {/* Display Section */}
        <Display />
      </div>
    </>
  );
}

export default App;
