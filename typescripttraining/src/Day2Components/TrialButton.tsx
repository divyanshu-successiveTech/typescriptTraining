'use client'

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";


export default function TrialButton(){

    const {theme,toggleTheme} = useContext(ThemeContext)
    document.body.className=theme;

    return(

        <button onClick ={toggleTheme}>
            click:{theme}
        </button>
    )
    
}
