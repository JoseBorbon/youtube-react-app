import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

/*
  Components
*/

import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
       
    <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
