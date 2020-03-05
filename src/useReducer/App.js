import React, { Fragment, useReducer } from "react";

const App = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      password: ""
    }
  );
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInput({ [name]: value });
    // console.log(event.target.value);
  };

  const txtC = {
    textTransform: "capitalize"
  };
  return (
    <Fragment>
      <h1>Controlled by React</h1>
      <form action="">
        <input
          type="text"
          name="name"
          id=""
          value={userInput.name}
          onChange={handleChange}
          style={txtC}
        />
        <input
          type="text"
          name="password"
          id=""
          value={userInput.password}
          onChange={handleChange}
          style={txtC}
        />
      </form>
    </Fragment>
  );
};

export default App;
