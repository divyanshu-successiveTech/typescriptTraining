'use client'
import { useEffect, useState } from "react";

function SearchFilter(){


    const [text,setText] = useState<string>("");
    const [dynamic,setDynamic] = useState<(string|undefined)[]>([]);


    let arr=["aaaa","aabb","aabc","aabd"];
    

    useEffect(()=>{
        setDynamic(arr.map((item)=>{
            if(item.search(text)>-1){
                return item;
            }
        }))

    },[text])
    return(

        <>

        <input value={text} placeholder="Enter keyword" onChange={(e)=>{setText(e.target.value)}}></input>

        <ul>
            {text.length>0 && dynamic.map((curr)=>{return<li key ={curr}> <h3>{curr}</h3></li>})}   


        </ul>




        
        
        </>
    )

}
export default SearchFilter;