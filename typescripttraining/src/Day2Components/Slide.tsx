'use client'

import { useEffect, useState } from "react";

const Slide = () =>{

    let arr=["/one.jpeg","/two.jpeg","/three.jpeg","/four.jpeg","/five.jpeg","/six.jpeg","/seven.jpeg","/eight.jpeg","/nine.jpeg","/ten.jpeg"];

    
    let [image,setImage] = useState<string>(arr[0]);
    let [isPaused,setIsPause] = useState<boolean>(false);
    

    let [index,setIndex]=useState<number>(1);
    useEffect(()=>{
        setTimeout(()=>{
            
            if(!isPaused){
                setImage(()=>{
                    return arr[index%arr.length]
                });
                setIndex(index+1);
            }
            
            
        },2000)
    },[image,isPaused])

        return(
            <>
            <><img src = {image} height="300" width="350"></img></>
            
            <br/>
            <button onClick={()=>{setIsPause(isPaused=false)}}>Play</button>
            <button onClick={()=>{setIsPause(isPaused=true)}}>Pause</button>
            
            
            </>
        )

}


export default Slide;