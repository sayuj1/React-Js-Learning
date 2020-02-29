import React, { Component, Fragment } from "react";

// let el = < h1 > Hello World1! < /h1>   

// export default el;

// class App extends Component {
//     render() {
//         // return React.createElement("h1", null, "Hello World2!");
//         return <h1> Hello World3! </h1>;
//     }
// }

//App-- > Component  

// class App extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <h1>Hello World1</h1>
//                 <h2>Hellow World2</h2>
//             </Fragment>
//         );
//     }
// }

// export default App;

// const el = <h1> Hello Sayuj </h1>;
// export default el;

const Student = (props) => {
    return <h1>Hello {props.name}</h1>
}

export default Student;