"use client"
import withLogger from "./withLogger"

function Comp(){
    return(
        <>
        this is function inside withLogger
        
        </>
        
    )
}

export default withLogger(Comp);