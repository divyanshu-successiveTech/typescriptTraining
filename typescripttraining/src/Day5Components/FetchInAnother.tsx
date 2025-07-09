import Button from "@/Day5Components/Button";


let currdata:object[]=[];
export async function fetching(){
   const response = await fetch("https://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   .then((data)=>{
    currdata=data;
   })
   
}




function FetchInAnother(){
    fetching();
    console.log(currdata);

    return(
        <>
        {Array.isArray(currdata) ? currdata.map((item)=>{return <div>{JSON.stringify({item},null,4)}</div>}) : "Try Again"}
        
        <br/>
        <Button/>

        </>
    )
}

export default FetchInAnother