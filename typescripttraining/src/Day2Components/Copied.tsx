'use client'

import { useState } from "react";
import useCopy from "./useCopy";

const Copied=()=>{
    const [val,setVal] = useState<string>("")
    const {copy,status}=useCopy();


    return (
        <>
        <input value={val} onChange={(e)=>{setVal(e.target.value)}} placeholder="Enter the text"></input>
        <button onClick={()=>copy(val)}>{status}</button>
        
        </>
        
    )
}


export default Copied;