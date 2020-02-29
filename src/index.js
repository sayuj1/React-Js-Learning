import React from "react";
import ReactDom from "react-dom";

// import el from "./App";
// import Student from "./App";
// import App from "./App";
// import el from "./App";

// import App from "./App";
import Student from "./Student";

// let el = < h1 > Hello World! < /h1>   
/* react element is created, it is same as 'React.createElement("h1", null, "Hello World!")' */

// ReactDom.render(el, document.getElementById("root"));

// ReactDom.render(< App />, document.getElementById("root"));

// ReactDom.render(el, document.getElementById("root"));
// ReactDom.render(<Student name="Sayuj" />, document.getElementById("root"));

// ReactDom.render(<App />, document.getElementById("root"));

ReactDom.render(<Student name="varun" />, document.getElementById("root"));

