import { ShoppingCartProvider } from "@/Day2Components/ShoppingCardProvider";
import { ShoppingCart } from "@/Day2Components/ShoppingCart";


export default function Question11(){
    return (
        <>
        <h4>Question11</h4>
        <ShoppingCartProvider>
            <ShoppingCart/>
        </ShoppingCartProvider>
        
        </>
        
    )
}