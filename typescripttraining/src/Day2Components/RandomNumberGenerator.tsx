'use client'

import { useState } from "react";

const RandomNumberGenerator = ()=>{
    let [number,SetNumber]=useState<number>(generate());

    function generate():number{
        return Math.round(Math.random()*100);
    }
    return(
        <>
        {number}<br/>
        <button onClick={()=>{SetNumber(generate())}}>Generate</button>
        </>
        
    )
    
}


export default RandomNumberGenerator;