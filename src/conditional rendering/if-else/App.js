import React, { useState } from "react";
import User from "./User";
import Guest from "./Guest";

const App = () => {
    // intially user is not logged in 
    const [isLoggedIn, setisLoggedIn] = useState(false);

    // for login
    function clickLogin() {
        setisLoggedIn(true);
    }
    // for logout
    function clickLogout() {
        setisLoggedIn(false);
    }

    // if user is logged in then render User component else render Guest component
    if (isLoggedIn) {
        return <User name="Sayuj" clickData={clickLogout} />;
    } else {
        return <Guest clickData={clickLogin} />
    }
}

export default App;