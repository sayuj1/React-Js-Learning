import React, { Component } from "react";

// const Student = (props) => {
//     return <h1> Hello {props.name} </h1>;
// };

// class Student extends Component {
//     render() {
//         return <h1> Hello {this.props.name}</h1>;
//     }
// }

// class Student extends Component {
//     state = {
//         name: this.props.name,
//         roll: 101
//     }
//     render() {
//         return (
//             <h1>My name is {this.state.name} with roll no. {this.state.roll}</h1>
//         )
//     }
// }

class Student extends Component {
    state = {
        name: this.props.name,
        roll: this.props.roll
    }
    handleClick = () => {
        console.log("Button clicked", this);
        console.log("Your name is ", this.state.name, "Your roll number is ", this.state.roll);
    }
    render() {
        return (
            <div>
                <h1>Hello event, this is {this.state.name} and my roll is {this.state.roll}</h1>
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}
export default Student;