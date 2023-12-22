import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [logIn, setlogIn] = useState(false);

  const handlLogIn = () => {
    setlogIn(true);
  };

  return (
    <div className="Parent">
      <h1>{logIn ? "Welcome, User!" : "Please Login"}</h1>
      <Child handlLogIn={handlLogIn} />
    </div>
  );
};

export default Parent;
