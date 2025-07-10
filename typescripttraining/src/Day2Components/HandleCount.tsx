


import { useState } from "react"
type PropHandler={
    change:(prev:number)=>number;
}

export const HandleCount =({change}:PropHandler)=>{

    const [count,setCount]=useState(0);

    return(
    <>
    {count}<br></br>
    <button onClick={()=>{setCount(change(count))}}>Increase</button>
    </>
    )

}
