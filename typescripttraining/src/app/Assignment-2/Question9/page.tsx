import { ThemeProvider } from "@/Day2Components/ThemeProvider";
import TrialButton from "@/Day2Components/TrialButton";


export default function Question9(){
    return (
        <>
        <h4>Question9</h4>
        <ThemeProvider>
            <h1>This is the text</h1>
            <TrialButton />
        </ThemeProvider>
        </>
        
    )
}