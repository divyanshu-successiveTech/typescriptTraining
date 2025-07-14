'use client'

import { createContext,ReactNode,useState } from "react";


interface ParentValue{
    currstatus:string,
    validate:(user:string,pass:string)=>void;
}

export const ParentContext = createContext<ParentValue>({
    currstatus:"Logged out",
    validate:()=>{},
});

export const ParentProvider = ({children}:{children:ReactNode}) =>{

    const [userName,setUserName] = useState("ABC");
    const [password,setPassword] = useState('111');
    const [currstatus,setCurrStatus] = useState('Logged out')


    const validate =(user:string,pass:string)=>{

        if(user == userName && pass == password){
            setCurrStatus("Logged in");
            
        }

    }

    return (
        <ParentContext.Provider value = {{currstatus,validate}}>
        {children}
        </ParentContext.Provider>
    )

}
