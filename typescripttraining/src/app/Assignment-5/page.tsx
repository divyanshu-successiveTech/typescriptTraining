'use client'

import { useRouter } from "next/navigation";

function Day5(){
    const router = useRouter();

    return(
        <>
        <button onClick={()=>router.push('/Assignment-5/Question1')}>To Question1</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question2')}>To Question2</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question3')}>To Question3</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question4')}>To Question4</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question5')}>To Question5</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question6')}>To Question6</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question7')}>To Question7</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question8')}>To Question8</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question12')}>To Question12</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question13')}>To Question13</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question14')}>To Question14</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question15')}>To Question15</button><br/><br/>
        <button onClick={()=>router.push('/Assignment-5/Question16')}>To Question16</button><br/><br/>


        

        </>
    )
}

export default Day5;