"use client"

import { useState } from "react";

function FormValues(){

    const [fname,setfname] = useState<string>("");
    const [lname,setlname] = useState<string>("");
    const [gender,setGender] = useState<string>("");
    const [above18,setAbove18] = useState(false);

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setGender(e.target.value);

    }

    function print(){
        
        console.log(`First name is : ${fname}` )
        console.log(`Last name is : ${lname}` )
        console.log(`Gender is : ${gender}` )
        console.log(` isAbove18? : ${above18}` )
    }
    return(

        <form onSubmit={(e)=>{e.preventDefault()}}>
        <input value={fname} onChange={(e)=>{setfname(e.target.value)}} placeholder="Enter First name"></input>
        <input value={lname} onChange={(e)=>{setlname(e.target.value)}} placeholder="Enter Last name"></input><br/>


        <input type= "checkbox"  onChange={()=>{setAbove18(!above18)}}></input>
        Are you Above 18 years of age?<br></br>


        <div>

            <input type="radio"   value = "Male" checked={gender === 'Male'} onChange={(e)=>handleChange(e)}></input>Male
            <input type="radio"  value = "Female" checked={gender === 'Female'} onChange={(e)=>handleChange(e)}></input>Female
        </div>

        <button  onClick={()=>print()}>Submit</button>
        
        
        </form>
    )
}

export default FormValues;