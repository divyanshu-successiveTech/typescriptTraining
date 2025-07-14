"use client"
import products from "@/Day3Components/ProductList";
import Link from "next/link";

function Question6(){

    return(
        
        <ul>
            {products.map((item)=>{
                

                return(
                    <li key = {item.id}>
                        <h3><Link href= {`./Question6/${item.id}`}>{item.name}</Link> </h3>

                    </li>
                    

                )  
            })}
        </ul>   
        
    )

}

export default Question6;