'use client'

import { createContext,ReactNode,useState } from "react";


enum themeValue{
    Light="light",
    Dark="dark"

}
enum LoginValue{
    In="Logged in",
    Out="Logged Out"
}

interface LightLoginValues{
    currtheme:string
    currstatus:string
    validate:(user:string,pass:string)=>void;
    change:()=>void;

}

export const LightLoginContext = createContext<LightLoginValues>({
    currtheme:"light",
    currstatus:"Logged out",
    validate:()=>{},
    change:()=>{}

});

export const LightLoginProvider = ({children}:{children:ReactNode}) =>{

    const [userName,setUserName] = useState<string>("ABC");
    const [password,setPassword] = useState<string>('111');
    const [currstatus,setCurrStatus] = useState<string>(LoginValue.Out)
    const [currtheme,setCurrtheme] = useState<string>('light');

    const change =():void=>{
        setCurrtheme(currtheme == themeValue.Light ? themeValue.Dark : themeValue.Light);
    }


    const validate =(user:string,pass:string):void=>{

        if(user === userName && pass === password){
            setCurrStatus(LoginValue.In);
            
        }

    }

    return (
        <LightLoginContext.Provider value = {{currtheme,currstatus,validate,change}}>
        {children}
        </LightLoginContext.Provider>
    )

}
