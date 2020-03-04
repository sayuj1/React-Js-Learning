import React from "react";
import User from "./User";
import Guest from "./Guest";

const App = (props) => {
    if (props.consumer) {
        return <User />
    }
    return <Guest />
}

export default App;