'use client'

import { useState } from "react";
export default function PersonForm(){
    let [FirstName,setFirstName] = useState<string>("");
    let [LastName,setLastName] = useState<string>("");
    let [Age,setAge] = useState<string>("");

   

    return(
        <form>
        <p>First Name : {FirstName}</p>
        <input type="text" id = "firstname" placeholder="Enter your firstname" onChange={(e)=>{setFirstName(FirstName=e.target.value)}}></input>
        <br></br>
        

        <p>Last Name : {LastName}</p>
        <input type="text" id = "lastname" placeholder="Enter your lastname" onChange={(e)=>{setLastName(LastName=e.target.value)}}></input>
        <br></br>
        

        <p>Age : {Age}</p>
        <input type="text" id = "age" placeholder="Enter your age" onChange={(e)=>{setAge(FirstName=e.target.value)}}></input>
        <br></br>
        
    
        </form>
    )
}