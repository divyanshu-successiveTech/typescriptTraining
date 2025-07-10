'use client'

import { createContext, ReactNode, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  
}

interface ShoppingValues{
    products:Product[],
    addProduct:(product:Product)=>void,
    removeProduct:(id:number)=>void
}


export const ShoppingCartContext = createContext<ShoppingValues>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
})


export const ShoppingCartProvider =({children}:{children:ReactNode}) =>{

    const [products,setProducts] = useState<Product[]>([]);

    const addProduct=(product:Product)=>{
        
        setProducts((prev)=>[...prev,product])
    }

    
    const removeProduct=(id:number)=>{

        let arr = products.filter((p)=>id!==p.id);

        setProducts([...arr]);
    }

    return (
        <ShoppingCartContext.Provider value ={{products,addProduct,removeProduct}}>
            {children}
        </ShoppingCartContext.Provider>
    )


}



