import React from "react";
import ReactDom from "react-dom";
// import el from "./App";
import App from "./App";

// let el = < h1 > Hello World! < /h1>   
/* react element is created, it is same as 'React.createElement("h1", null, "Hello World!")' */

// ReactDom.render(el, document.getElementById("root"));
ReactDom.render(< App />, document.getElementById("root"));