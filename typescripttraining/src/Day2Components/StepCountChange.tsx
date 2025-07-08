'use client'

import { useState } from "react";

export default function StepCountChange(){

    let [count,setCount] = useState<number>(0);
    let [step,setstep] = useState<number>(0);
    

    return (

        <><p>{count}</p>

        <input type="number" id = "count" placeholder="Entere the step for change" onChange={(e)=>{setstep(parseFloat(e.target.value))}}/>
        
        <button onClick={()=>{setCount(count + step)}}>Increment</button>
        <button onClick={()=>{setCount(count - step )}}>Decrement</button>
        </>  
    )

}