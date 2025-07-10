'use client'

import { useContext } from "react";
import { Languagecontext } from "./LanguageProvider";

type PropText={
    text:string;
}

enum Language{
    spanish="spanish",
    english="english",
    englishText="This is sample text",
    spanishText="Este es un texto de muestra"

}

export const LanguageButton=({text}:PropText)=>{

    const {language,changeLang} = useContext(Languagecontext);

    let curr =text;

    {curr = language === Language.spanish?Language.englishText : Language.spanishText}

    return(
        <>
        {curr}<br></br>
        <button onClick={changeLang}>
            Click for {language}
        </button>
        </>
        
        
    )
}