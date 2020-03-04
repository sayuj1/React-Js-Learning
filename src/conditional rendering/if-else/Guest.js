import React, { Fragment } from "react";

const Guest = (props) => {
    return (
        <Fragment>
            <h1>Welcome Guest</h1>
            <button onClick={props.clickData}>Login</button>
            <button>Register</button>
        </Fragment>
    );
};

export default Guest;