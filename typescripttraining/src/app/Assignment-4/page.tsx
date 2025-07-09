'use client'

import { useRouter } from "next/navigation";

function Day4(){
    const router = useRouter();

    return(
        <>
        <button onClick={()=>router.push('/Assignment-4/Question1')}>To Question1</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question2')}>To Question2</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question3')}>To Question3</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question4')}>To Question4</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question5')}>To Question5</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question6')}>To Question6</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question7')}>To Question7</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question8')}>To Question8</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question10')}>To Question10</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-4/Question11')}>To Question11</button><br/><br/>


        </>
    )
}

export default Day4;