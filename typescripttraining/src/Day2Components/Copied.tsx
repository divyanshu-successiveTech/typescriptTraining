'use client'

import { useState } from "react";
import useCopy from "./useCopy";

const Copied=()=>{
    const [value,setValue] = useState<string>("")
    const {copy,status}=useCopy();


    return (
        <>
        <input value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="Enter the text"></input>
        <button onClick={()=>copy(value)}>{status}</button>
        
        </>
        
    )
}


export default Copied;