import { useState } from "react";

const useCopy =()=>{
    const [status,setStaus]=useState<string>('Copy');

    const copy=(value:string)=>{
        
        let element= document.createElement("textarea");
        element.innerText=value;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        setStaus('copied');
    
    }

    return {copy,status};
}

export default useCopy;