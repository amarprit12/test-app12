import React, { useContext } from "react";
import { data } from "./App";

const ChildC = () => {
  // from which conntext we will get name, its data
  const name = useContext(data);
  return (
    <>
      <data.Consumer>
        {() => {
          return <h1>My name is {name} </h1>;
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
