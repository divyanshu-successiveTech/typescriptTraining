'use client'


import { createContext ,useState } from "react";

enum themeMode{
  light="light",
  dark="dark"
}


interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: themeMode.light,
  toggleTheme: () => {}
});

export const ThemeProvider = ({children}:any) =>{

    const [theme,setTheme]= useState(themeMode.light);

    const toggleTheme = () =>{
        setTheme((prev)=>(prev === themeMode.light?themeMode.dark:themeMode.light))     
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
