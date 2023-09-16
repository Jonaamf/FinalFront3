import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

function Nopage (){
    const { state } = useContext(ContextGlobal);
return (
    <h1 className={state.theme=== 'light' ? 'light' : 'dark'}>Page not found</h1>
)
}

export default Nopage;