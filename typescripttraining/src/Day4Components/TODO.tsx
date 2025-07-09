'use client'

import { useState } from "react";

interface TodoItem{
    id:number,
    task:string,
}

function TODO(){

    const [todos,settodos] = useState<TodoItem[]>([]);
    const[curr,setCurr] = useState<string>("")

    return(
        <>
        <input value={curr} placeholder="Enter task to add" onChange={(e)=>{setCurr(e.target.value)}}></input>

        <button onClick={()=>{settodos([...todos,{id:Date.now(),
            task : `${curr}`
        }])}}>ADD</button>
        <ul>
        {todos.length>0 && todos.map((item)=><li key={item.id}>{item.task}</li>)}


        </ul>
        
        
        
        
        </>
    )

}
export default TODO;