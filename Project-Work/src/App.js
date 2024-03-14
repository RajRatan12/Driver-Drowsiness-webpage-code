import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import videoBG from "./Components/Videos/pexels_videos_1394254 (1440p).mp4";
import Header from "./Components/Header";
import RoutesModules from "./Components/RoutesModules";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>{" "}
      <div>
        <RoutesModules />
      </div>{" "}
    </>
  );
}

export default App;
