"use client"
import { useContext, useEffect } from "react"
import { redirect } from "next/navigation";
import { ValidationContext } from "@/Day3Components/ValidationContext";


function Profile() {

    const {flag} = useContext(ValidationContext);

     useEffect(()=>{
            if(!flag){
                redirect('/Assignment-3/Question5/Login')
            }
    
    
        },[flag])

    return (
        <>
        This is the information from Profile
        </>
    )

}

export default Profile