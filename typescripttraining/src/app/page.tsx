"use client"
import { useRouter } from "next/navigation";


export default function Home() {
  


  const router = useRouter();

  return (
  <>
    <h1>HomePage</h1>

    <h3>Here are the link to all the questions according to Day</h3>

    <button onClick={()=> router.push('/Assignment-1')}>To Day-1</button><br/><br/>
    <button onClick={()=> router.push('/Assignment-2')}>To Day-2</button><br/><br/>
    <button onClick={()=> router.push('/Assessment')}>To Assessment</button><br/><br/>
    <button onClick={()=> router.push('/Assignment-3')}>To Day-3</button><br/><br/>

  
  </>
 

  );
}
