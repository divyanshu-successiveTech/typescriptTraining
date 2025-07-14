"use client"

import Link from "next/link";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { ValidationContext } from "@/Day3Components/ValidationContext";

function HomeQuestion(){


    const {flag} = useContext(ValidationContext);



    
    useEffect(()=>{
        if(!flag){
            redirect("Day3/Question4")
        }


    },[flag])

    return(
        <>

        This is the text<br/>
        <Link href= "./About">To About</Link><br/><br/>


        To go to DashBoard<br/>
        <Link href= "/Assignment-3/Question5/Dashboard">To DashBoard</Link><br/><br/>

        To go to Profile<br/>
        <Link href= "/Assignment-3/Question5/Profile">To Profile</Link><br/><br/>

        To go to Settings<br/>
        <Link href= "/Assignment-3/Question5/Settings">To Settings</Link><br/><br/>


        
        </>
    )

}


    

    

export default HomeQuestion;