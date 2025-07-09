
async function fetching(){
   const response = await fetch("https://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   
   return response;
}


async function FetchData(){


    let curr = await fetching()
    
    return(
        <pre>

            {JSON.stringify(curr,null,2)}
        </pre>
    )
}

export default FetchData;