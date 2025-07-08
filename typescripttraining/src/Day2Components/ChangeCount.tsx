'use client'

import { useCallback } from "react";
import { HandleCount } from "./HandleCount";


export default function ChangeCount(){

    
    const handleClick=useCallback((val:number)=>{
        return val+1;
    },[])

    return (
        <>
        <HandleCount change ={handleClick}></HandleCount>
        
        
        </>
    )


}