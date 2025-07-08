"use client"
import { useEffect, useRef, useState } from "react";



type Timelimit={
    duration:number
}

const useTimer = ({duration}:Timelimit)=>{

    const [timeleft,setTimeLeft] = useState(duration);
    const [isRunning,setIsRunning] = useState(false);
    const time = useRef<number|null>(null);

    const startTimer=()=>{
        if(!isRunning){
            setIsRunning(true);
        }
    }


    const pauseTimer = ()=>{
        if(isRunning){
            setIsRunning(false);
        }
    }


    const reset = ()=>{
        setIsRunning(false);
        setTimeLeft(duration);

    }


    useEffect(()=>{
        if(isRunning){
            time.current = window.setInterval(()=>{
                setTimeLeft((prev)=>{
                    if(prev <= 1){
                        if (time.current !== null) clearInterval(time.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev-1;
                })
            },1000);
        }
        return () => {
    if (time.current !== null) {
      clearInterval(time.current);
      time.current = null; 
    }
  };
    },[isRunning])

    return {timeleft,startTimer,pauseTimer,reset}

}

export default useTimer;