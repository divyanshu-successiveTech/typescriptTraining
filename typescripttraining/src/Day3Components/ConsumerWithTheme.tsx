"use client"
import { useContext, useEffect, useState } from "react"
import { LightLoginContext } from "./LIghtLoginProvider"

function ConsumerWithTheme(){
    const {currtheme,currstatus,validate,change} = useContext(LightLoginContext)
    const [user,setUser] = useState<string>('')
    const [pass,setPass] = useState<string>('')

    const check = ():void =>{
        validate(user,pass);
        
        
    }

    useEffect(() => {
        document.body.className = currtheme;
    
    }, [currtheme]);
    
    const themeChanger = ():void =>{
        change();
        
    }


    return(
        <>

        <input value = {user} onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter username"></input>
        <input value = {pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"></input>
        
        <button onClick={()=>{check()
            
        }}>Submit</button>
        <button onClick={()=>{themeChanger()}}>{currtheme}</button>
        
        <br></br>
        {currstatus == "Logged in" ? `Welcome, ${user}!` :"Please log in"}
        
        

        </>
    )
}


export default ConsumerWithTheme;