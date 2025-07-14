"use client"

import { useState } from "react"
import ConditionalComponet from "./ConditionalComponent";



function RenderComp(){
    const [word,setWord] = useState<string>("");

    return(
        <>

        <input value={word} onChange={(e)=>setWord(e.target.value)} placeholder="Enter text"></input><br/>
        {word === "show" ? <ConditionalComponet/> : ""}
        
        
        </>
        
    )

}

export default RenderComp