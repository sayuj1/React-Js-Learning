import React, { Component } from "react";

// const Student = (props) => {
//     return <h1> Hello {props.name} </h1>;
// };

// class Student extends Component {
//     render() {
//         return <h1> Hello {this.props.name}</h1>;
//     }
// }

class Student extends Component {
    state = {
        name: this.props.name,
        roll: 101
    }
    render() {
        return (
            <h1>My name is {this.state.name} with roll no. {this.state.roll}</h1>
        )
    }
}
export default Student;