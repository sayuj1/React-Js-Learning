import React, { Fragment } from "react";

const User = (props) => {
    return (
        <Fragment>
            <h1>Welcome {props.name}</h1>
            <button onClick={props.clickData}>Logout</button>
        </Fragment>
    );
};

export default User;