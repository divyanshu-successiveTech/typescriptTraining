"use client"
import { useContext, useState ,useEffect} from "react";

import { useRouter } from "next/navigation";
import { ValidationContext } from "./ValidationContext";

export const LoginComponent=()=>{

    const router= useRouter()

    let {flag,validate} = useContext(ValidationContext);
    const [currUser,setCurrUser] = useState<string>("");
    const [currPass,setCurrPass] = useState<string>("");


    useEffect(()=>{
        if(flag){
            router.push("/Assignment-3/Question3/Home")
        }

    },[flag])

    function check(currUser:string,currPass:string){
        
        validate(currUser,currPass);

    }

 
    return(

        <>
        <input value={currUser} onChange={(e)=>{setCurrUser(e.target.value)}} placeholder="Enter username"></input>
        <input value={currPass} onChange={(e)=>{setCurrPass(e.target.value)}} placeholder="Enter password"></input>
        <br/>

        
        <button  onClick={(e)=>{check(currUser,currPass)}}>Submit</button>
 
        </>
    )
}