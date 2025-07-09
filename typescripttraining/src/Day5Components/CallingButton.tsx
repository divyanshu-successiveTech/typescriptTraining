"use client"

import ButtonComponent from "./ButtonComponent";




function CallingButton(){

    function handleClick(){
        console.log("Hello")
    }
    return(
        <ButtonComponent variant ="primary" text="Sample Button" handleClick={handleClick}/>
    )
}

export default CallingButton;