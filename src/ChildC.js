import React, { useContext } from "react";
import { data, data1 } from "./App";

const ChildC = () => {
  // from which conntext we will get name, its data
  const name = useContext(data);
  const color = useContext(data1);
  return (
    <>
      <data.Consumer>
        {() => {
          return (
            <h1>
              My name is {name} and color is {color}{" "}
            </h1>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
