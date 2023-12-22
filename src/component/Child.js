import React, { useState } from "react";

const Child = ({ handlLogIn }) => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    handlLogIn();
    setSubmitted(true);
  };

  return (
    <div className="Child">
      <h1>Parent Component</h1>
      {submitted ? (
        <p>Congratulation! Your log in now</p>
      ) : (
        <div>
          <label>
            Username:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleSubmit}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Child;
