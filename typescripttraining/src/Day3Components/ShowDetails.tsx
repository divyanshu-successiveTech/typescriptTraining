import products from "@/Day3Components/ProductList";

export const ShowDetails=({id}:{id:number})=>{

        let curr = products[id-1];


    return(
        <>
        Name:{curr.name}<br/>
        Description : {curr.description}
        </>
    )

}