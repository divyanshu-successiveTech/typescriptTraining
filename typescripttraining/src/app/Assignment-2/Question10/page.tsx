import { LanguageButton } from "@/Day2Components/LanguageButton";
import { LanguageProvider } from "@/Day2Components/LanguageProvider";

export default function Question10(){
    return (
        <>
        <h4>Question10</h4>
        <LanguageProvider>
            <LanguageButton text ="This is the sample text" ></LanguageButton>
        </LanguageProvider>
        </>
        
    )
}