'use client'

import { useState } from "react";

function ControlledComponent(){

    const [val,setVal] = useState<string>("");
    return(

        <>

            <input value={val} onChange={(e)=>{setVal(e.target.value)}} placeholder="Enter the desired text"></input><br/>
            {val}
        </>
    )
}

export default ControlledComponent;