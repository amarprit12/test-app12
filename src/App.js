import "./App.css";

import React from "react";
import ChildA from "./ChildA";
import { createContext } from "react";
// what is useContext hook ?
// create, provider, useContext
// how to use it

const data = createContext();
function App() {
  const name = "Hey test1";
  return (
    <>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </>
  );
}

export default App;
export { data };
