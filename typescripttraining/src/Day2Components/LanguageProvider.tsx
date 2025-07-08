'use client'

import { useState ,createContext, ReactNode } from "react";

interface Language{
    language:string;
    changeLang : ()=>void;
}


export const Languagecontext= createContext<Language>({
    language:"english",
    changeLang: () => {}
});

export const LanguageProvider =({children}:{children:ReactNode})=>{
    const [language,setLanguage] = useState<string>('english');


    const changeLang =()=>{
        setLanguage((prev)=>( prev ==='spanish' ? 'english':'spanish'))
    }


    return (
        <Languagecontext.Provider value ={{language,changeLang}}>
            {children}
        </Languagecontext.Provider>
    )
}