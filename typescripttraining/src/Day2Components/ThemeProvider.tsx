'use client'


import { createContext ,useState } from "react";


interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}
});

export const ThemeProvider = ({children}:any) =>{

    const [theme,setTheme]= useState('light');

    const toggleTheme = () =>{
        setTheme((prev)=>(prev === 'light'?'dark':'light'))     
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
