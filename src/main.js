import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import ConsoleAbout from "./ConsoleAbout";
import App from "./App";
import Doc from "./Doc";
const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/console">进入console</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/console/about">进入console-about</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/doc">进入doc</Link>&nbsp;&nbsp;&nbsp;
        <Routes>
          <Route path="/console" element={<App />}></Route>
          <Route path="/console/about" element={<ConsoleAbout />}></Route>
          <Route path="/doc" element={<Doc />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
