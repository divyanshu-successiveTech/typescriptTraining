'use client'

import { useState } from "react";

function SelectTag(){

    const [option,setOption] = useState<string>('');

    return(
        <>
        

        <select name="option" id="option" onChange={(e)=>{setOption(e.target.value)}}>
            <option value="Option1" >Option1</option>
            <option value="Option2">Option2</option>
            <option value="Option3">Option3</option>
            <option value="Option4">Option4</option>
        </select>
        <br/>
        The selected option is : {option}


        
        
        </>

    )


}
export default SelectTag;