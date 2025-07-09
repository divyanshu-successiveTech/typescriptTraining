"use client"

import { useState } from "react"
import NewComp from "./NewComp";
const Caller = () => {
    const [name,setName] = useState<string>("");
    const [pass,setPass] = useState<string>("");
    const [state,setState] = useState<boolean>(false);

    function call(){
        setState(true)
    }

    return(
        <>

        <input value={name} type ="text"placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}></input>
        <input value={pass} type ="password" placeholder="Enter Password" onChange={(e)=>{setPass(e.target.value)}}></input>

        <button onClick={call}>Submit</button>
        {state && <NewComp name={name} password={pass}/>}

        </>
    )
}
export default Caller;