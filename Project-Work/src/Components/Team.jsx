import React from "react";
import { categories } from "./Data";
import background from "./Images/Bg.jpg";
import debangshu from "./Images/DebangshuSaha.png";
import rajratan from "./Images/RajRatan.png";
import rohanganguly from "./Images/RohanGanguly.png";
import harshit from "./Images/HarshitShinghania.png";
import pranjal from "./Images/PranjalBiswas.png";
import unnati from "./Images/UnnatiSingh.png";
const team = () => {
  return (
    <div className="">
      <div className="m-0 p-0 w-[100%] h-[100vh] ">
        <img src={background} className="w-[100%] h-[100%] object-cover"></img>{" "}
      </div>{" "}
      <div className="m-0 p-0 w-[100%] h-[100vh] ">
        <img src={background} className="w-[100%] h-[100%] object-cover"></img>{" "}
      </div>{" "}
      {/* <div className="gap-y-10 my-3"> */}
      <div className="top-10 absolute w-[100%] h-[100%]">
        <div className="p-20 text-black md:w-[1200px] ">
          <div className="flex justify-center items-center  w-[10rem] mb-5">
            <img src={pranjal}></img>
            <h3 className="flex justify-start text-white font-Montagu">
              Pranjal Biswas
            </h3>
          </div>
          <div className="flex justify-center items-center  w-[10rem] mb-5">
            <img src={rajratan}></img>
            <h3 className="flex justify-start text-white font-Montagu">
              Raj Ratan
            </h3>
          </div>
          <div className="flex justify-center items-center  w-[10rem] mb-6">
            <img src={rohanganguly}></img>
            <h3 className="flex justify-center text-white font-Montagu">
              Rahan Ganguly
            </h3>
          </div>
          <div className="flex justify-center items-center  w-[10rem] mb-6">
            <img src={debangshu}></img>
            <h3 className="flex justify-start text-white font-Montagu ">
              Debangshu Saha
            </h3>
          </div>
          <div className="flex justify-center items-center  w-[10rem] mb-5">
            <img src={unnati}></img>
            <h3 className="flex justify-start text-white font-Montagu">
              Unnati Singh
            </h3>
          </div>
          <div className="flex justify-center items-center  w-[10rem]">
            <img src={harshit}></img>
            <h3 className="flex justify-start text-white font-Montagu">
              Harshit Singhania
            </h3>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default team;
