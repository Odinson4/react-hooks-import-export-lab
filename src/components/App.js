import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
// import { username, image, city } from "../data/user.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
