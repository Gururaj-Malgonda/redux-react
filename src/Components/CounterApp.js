import React from "react";

import { useSelector, useDispatch } from "react-redux"; // hooks given by redux for react in place of getState nd dispatch

const CounterApp = () => {

    useSelector(()=> console.log(state))

    return(
        <div>
            <h1>{count}</h1>
            <button>Increase</button>
            <button>Decrease</button>
            <button>Reset</button>
        </div>
    )
}

export default CounterApp;