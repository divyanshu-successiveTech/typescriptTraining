"use client"

import { ReactNode, useState } from "react";
import { createContext } from "react"


interface ValidationType{
    flag:boolean,
    validate:(user:string,pass:string)=>void
}

export const ValidationContext = createContext<ValidationType>({
    flag:false,
    validate:()=>{}
});

export const ValidationProvider = ({children}:{children:ReactNode}) =>{


    let [flag,setFlag] = useState<boolean>(false);


    function validate(user:string,pass:string):void{

        if(user==="ABC" && pass === "111" ){
            setFlag(true);
        }
    }


    return(
        <ValidationContext.Provider value ={{flag,validate}}>
            {children}
        </ValidationContext.Provider>


    )
}