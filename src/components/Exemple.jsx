import { useState } from "react";

export function Exemple(){
    const [value, setValue] = useState("ko");


    function handleClick(){
        setValue("ok")
    }

    return (
        <>
        <h1>Hello</h1>
        <button onClick={handleClick}>{value}</button>
        </>
    )
}