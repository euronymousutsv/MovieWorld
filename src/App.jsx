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
    // <>
    //   <div className="container mx-auto">
    //     <h1 className="text-3x1 font-bold underline">Hello World</h1>
    //     <button className="bg-sky-500 hover:bg-sky-700 rounded-es-lg px-4 md:bg-gray-300 sm:bg-red-900">
    //       Press Me
    //     </button>

    //     <div className="flex flex-col md:flex-row gap-[20px]">
    //       <div className="opacity-50 bg-blue-400 p-[20px] my-1 border-t-cyan-900 border-[20px] rounded-l-[50px]">
    //         Item 1
    //       </div>
    //       <div className="bg-green-300 p-[15px]">Item 2</div>
    //     </div>
    //   </div>
    // </>
  );
}

export default App;
