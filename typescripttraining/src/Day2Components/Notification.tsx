'use client'

import { useEffect , useState } from "react";

export default function Notification(){

    let [message,setMessage] = useState<string>("");

    useEffect(()=>{
        setTimeout(()=>{
            setMessage((prev)=>{
                if(prev == ""){
                    return "Hi";
                }else{
                    return "";
                }
            });
        },5000)
    },[message]);

    return(
        <>
        <p>Notification is : {message}</p>
        </>
    )

}