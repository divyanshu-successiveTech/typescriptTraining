"use client"
import { useRouter } from "next/navigation";

export default function Day2(){


    let router = useRouter();

    return (
        <>
        <button onClick={()=>router.push('/Assignment-3/Question1')}>Question 1</button><br></br><br></br>
        <button onClick={()=>router.push('/Assignment-3/Question2')}>Question 2</button><br></br><br></br>
        <button onClick={()=>router.push('/Assignment-3/Question3')}>Question 3</button><br></br><br></br>
        <button onClick={()=>router.push('/Assignment-3/Question4')}>Question 4</button><br></br><br></br>
        <button onClick={()=>router.push('/Assignment-3/Question5/Login')}>Question 5</button><br></br><br></br>
        <button onClick={()=>router.push('/Assignment-3/Question6')}>Question 6</button><br></br><br></br>




        

        </>



    )

}