"use client"

import { useEffect, useState } from "react";

function TemperatureConverter(){
    const [celcius,setCelcius] = useState<number>(0)
    const [farhenite,setFarhenite] = useState<number>(0)

    function changefarhenite(e:React.ChangeEvent<HTMLInputElement>){
        
        const {value}=e.target;
        setCelcius(parseFloat(value));
        setFarhenite((parseFloat(value)*(9/5))+32)
    }

    function changecelcius(e:React.ChangeEvent<HTMLInputElement>){
        
        const {value}=e.target;
        setFarhenite(parseFloat(value));
        setCelcius((parseFloat(value)-32)*(5/9))    
    }


    return(
        <>Farhenite
        <input value={farhenite} placeholder="Farhenite" onChange={(e)=>{ changecelcius(e)}}></input><br/><br/> 

        Celcius

        <input value={celcius} placeholder="Celcius" onChange={(e)=>{changefarhenite(e)}} />
        
        
        </>


    )
}

export default TemperatureConverter;