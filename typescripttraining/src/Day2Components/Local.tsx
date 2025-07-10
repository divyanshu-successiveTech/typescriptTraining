'use client'
import { useState } from "react";
import useLocalStorage from "./useLoacalStorage";

export const Local=()=>{

    const [val,setVal]= useState<string>('');
    const [id,setId]=useState<string>('');

    const {setter,getter,remove}=useLocalStorage();


    return(

        <>
        <input value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter Key"></input>

        <input value={val} onChange={(e)=>{setVal(e.target.value)}} placeholder="Enter value"></input>

        <button onClick={()=>{
            
            setter({key:id,value:val})
            setId('')
            setVal('')
            
            
        }}>Set value</button>

        <button onClick={()=>{setVal(getter({key:id}))}}>Get</button>
        
        <button onClick={()=>{remove({key:id})}}>Remove value</button>
        
        
        
        
        </>


    )

}