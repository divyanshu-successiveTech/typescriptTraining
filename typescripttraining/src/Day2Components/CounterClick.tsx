'use client'
import { useState } from "react";

export default function CounterClick(){

    let [count,setCount] = useState<number>(0);

    return (
    
        <><p>{count}</p>
        <button onClick={()=>setCount(count+=1)}>Increment</button>
        <button onClick={()=>setCount(count-=1)}>Decrement</button>
        </>  
    )

}