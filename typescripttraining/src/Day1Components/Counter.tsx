'use client'

import { useState } from "react"


const Counter=()=>{
    let [count,setCount]=useState<number>(0);
    
    return(
        <div>
            <p>{count}</p>
        <p>
            <button onClick={()=>{setCount(count +=1)}}>Increment</button>
            <button onClick={()=>{setCount(count -=1)}}>Decrement</button>  
        </p>
        </div>
    )   
}

export default Counter;