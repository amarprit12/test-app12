import "./App.css";

import React from "react";
import ChildA from "./ChildA";
import { createContext } from "react";
// what is useContext hook ?
// create, provider, useContext
// how to use it

const data = createContext();
const data1 = createContext();

function App() {
  const name = "Hey test1";
  const color = "blue";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={color}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
