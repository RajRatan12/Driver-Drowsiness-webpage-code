import React from "react";
import background from "./Images/Bg.jpg";
function App() {
  const DrowsinessDetection = () => {
    window.location.href = "http://localhost:8501/";
  };

  const SmokeandCellphoneDetection = () => {
    window.location.href = "http://localhost:8502/";
  };

  const TheftDetection = () => {
    window.location.href = "http://localhost:8503/";
  };
  return (
    <div>
      <div className="m-0 p-0 w-[100%] h-[100vh] ">
        <img src={background} className="w-[100%] h-[100%] object-cover"></img>{" "}
      </div>{" "}
      <div className="top-10 absolute w-[100%] h-[100%]">
        <div className=" min-h-screenflex justify-center items-center">
          <div className=" text-center">
            <h1 className="text-4xl font-bold mb-8 mt-20 text-lightgreen font-Montagu">
              Choose a Detection Type
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="ml-[10rem] bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2 font-Montagu">
                  Drowsiness Detection
                </h2>
                <button
                  onClick={DrowsinessDetection}
                  className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none "
                >
                  Start
                </button>
              </div>
              <div className="ml-[5rem] mr-[5rem] bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2 font-Montagu">
                  Theft Detection
                </h2>
                <button
                  onClick={TheftDetection}
                  className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none"
                >
                  Start
                </button>
              </div>
              <div className="mr-[10rem] bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2 font-Montagu">
                  Cellphone Detection
                </h2>
                <button
                  onClick={SmokeandCellphoneDetection}
                  className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
