'use client'
import { useState } from "react";

function PasswordAuthenticate(){
    const [pass,setPass] = useState<string>("");
    const [checkpass,setCheckPass] = useState<string>(""); 
    const [text,setText] = useState<string>("")

    function validate(){
        if(pass===checkpass){
            setText("password set")
        }else{
            setText("password does not match please try again")
        }
    }

    return(
        <form onSubmit={(e)=>{e.preventDefault()}}>

        <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"></input>
        <input type="password" value={checkpass} onChange={(e)=>{setCheckPass(e.target.value)}}placeholder="Re-enter Password"></input>

        <button onClick={()=>{validate()}}>Submit</button><br/><br/>
        {text}
        
        
        
        </form>
    )
}

export default PasswordAuthenticate;