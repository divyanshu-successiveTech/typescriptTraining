"use client"

import { useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import LoadingData from "./LoadingData";


export default function Loading(){
    let [loading,setLoading] = useState<boolean>(false);
    return (
        <>
        <LoadingData loading={loading} setLoading={setLoading}/>
        {
            loading == false ? <OrbitProgress color="#32cd32" size="medium" text="" textColor="" /> : <></>
        }
        <br/>
        <br/>
        <button onClick={()=>{
            setLoading(false);
            }}> Retry </button>
        </>
    );
}