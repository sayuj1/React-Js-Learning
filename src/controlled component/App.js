import React, { Fragment, useState } from "react";

const App = () => {
  const [value, setvalue] = useState("");
  const handleChange = event => {
    // console.log(event.target.value);
    setvalue(event.target.value);
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
          name=""
          id=""
          value={value}
          onChange={handleChange}
          style={txtC}
        />
      </form>
    </Fragment>
  );
};

export default App;
