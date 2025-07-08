'use client'

import { useMemo, useState } from "react";

export const StudentList=()=>{

    let list=['a','b','c','d'];

    const [names,setNames] = useState<string[]>([]);
    const [student,setStudent] = useState<string>("")

    list= useMemo<string[]>(()=>{
        return [...list,...names]
    },[names]);

    return (
        <>
        <ul>
        {list.map((item)=>{return<li>{item}</li>})}<br></br>
        </ul>
        
        <input id="input" value={student} onChange={(e)=>setStudent(e.target.value)} placeholder="Enter new Student name"></input>
        <button onClick={()=>setNames([...names,student])}>Add</button>
        </>
    )

}