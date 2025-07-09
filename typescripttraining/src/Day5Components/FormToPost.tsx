"use client"
import axios from "axios";
import { FormEvent, useState } from "react"

export default function FormToPost(){

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    
    const [status,setstatus]=useState<string|number>('')

    const handlclick =async(e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const datasend= await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,content
        });

        if(datasend.status){
            console.log(datasend.status)
            setstatus(datasend.status)
        }
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Enter the Title" onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" placeholder="Enter the Content" onChange={(e)=>setContent(e.target.value)}/>
                <button onClick={handlclick}>Submit</button>
            </form>
            <div>
                {status}
            </div>
        </div>
    )
}