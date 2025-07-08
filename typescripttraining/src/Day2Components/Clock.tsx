'use client'

import { useEffect, useState } from "react";

export default function Clock(){
    function getTime():string{
        let curr =  new Date();

        return curr.toTimeString();
    }    

    
    let [time,setTime] = useState<string>(getTime());
    let [seconds,setseconds] = useState<string>("");

    useEffect(()=>{
        
        let id = setTimeout(()=>{

            setseconds(getTime());
            setTime(getTime());
            
        },1000)

        return () => clearInterval(id);
    },[seconds])

    return (
        <p>The current time is {time}</p>
        
        
    )
}