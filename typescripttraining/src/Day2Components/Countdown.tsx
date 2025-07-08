"use client"

import useTimer from "./useTimer";



export const Countdown =()=>{

    const {timeleft,startTimer,pauseTimer,reset} = useTimer({duration:5});


    return(
        <>
        Timeleft : {timeleft}
        <button onClick={()=>startTimer()}>Start</button>
        <button onClick={()=>pauseTimer()}>Pause</button>

        <button onClick={()=>reset()}>Reset</button>
        
        </>
    )

}