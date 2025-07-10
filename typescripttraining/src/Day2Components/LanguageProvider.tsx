'use client'

import { useState ,createContext, ReactNode } from "react";

interface Language{
    language:string;
    changeLang : ()=>void;
}
enum Lang{
    english="english",
    spanish="spanish"
}

export const Languagecontext= createContext<Language>({
    language:Lang.english,
    changeLang: () => {}
});

export const LanguageProvider =({children}:{children:ReactNode})=>{
    const [language,setLanguage] = useState<string>('english');


    const changeLang =()=>{
        setLanguage((prev)=>( prev ===Lang.spanish ? Lang.english:Lang.spanish))
    }


    return (
        <Languagecontext.Provider value ={{language,changeLang}}>
            {children}
        </Languagecontext.Provider>
    )
}