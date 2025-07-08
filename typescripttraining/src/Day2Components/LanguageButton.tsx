'use client'

import { useContext } from "react";
import { Languagecontext } from "./LanguageProvider";

type PropText={
    text:string;
}

export const LanguageButton=({text}:PropText)=>{

    const {language,changeLang} = useContext(Languagecontext);

    let curr =text;

    {curr = language === 'spanish'?"This is sample text" : "Este es un texto de muestra"}

    return(
        <>
        {curr}<br></br>
        <button onClick={changeLang}>
            Click for {language}
        </button>
        </>
        
        
    )
}