"use client"

import { ShowDetails } from "@/Day3Components/ShowDetails";
import { useRouter } from "next/navigation";

function id({params}:{params:{id:number}}){

    const router = useRouter()

    
    const{id}= params;

    return(

        <>
        <ShowDetails id = {id}/><br/>
        <button onClick={()=>router.push('/Assignment-3/Question6')}>Back</button>
        
        </>
        
        
    )




}
export default id;