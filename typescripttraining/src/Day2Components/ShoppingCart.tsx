'use client'
import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "./ShoppingCardProvider";

export const ShoppingCart = () => {
    const { products, addProduct, removeProduct } = useContext(ShoppingCartContext);

    const [show, setShow] = useState<boolean>(false);
    const items = [
        { id: 1, name: "Product A", price: 1000 },
        { id: 2, name: "Product B", price: 5000 },
        { id: 3, name: "Product C", price: 8000 }
    ];

    const [total,setTotal] = useState<number>(0);

    useEffect(()=>{
        let sum=0;
        for(const c of products){
            sum+= c.price;

        }
        setTotal(sum);
        
    },[products])


    return (

        <>

            <ul>
                {items.map((current) => {
                    return (<li key={current.id}>{current.name}<br /><button onClick={() => { addProduct(current) }}>Add to cart</button></li>)

                })}

                <br />
                <button onClick={() => setShow(prev => !prev)}>ViewCart</button>

            </ul>
            <ul>

                
                {show && products.map((current, index) => {
                    return (<li key={index}>
                        {current.name}
                        <button onClick={() => { removeProduct(current.id) }}>remove</button>
                    </li>)
                })}

                

            </ul>
            Total is : {total}


        </>


    )

}