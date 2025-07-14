"use client"
import { useContext, useState } from "react"
import { ParentContext } from "./ParentProvider"

function Consumer(){
    const {currstatus,validate} = useContext(ParentContext)
    const [user,setUser] = useState<string>('')
    const [pass,setPass] = useState<string>('')

    const check = () =>{
        validate(user,pass);
    }


    return(
        <>

        <input value = {user} onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter username"></input>
        <input value = {pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"></input>
        
        <button onClick={()=>{check()
            
        }}>Submit</button><br></br>
        {currstatus == "Logged in" ? `Welcome, ${user}!` :"Please log in"}
        <br></br>
        

        </>
    )
}


export default Consumer;