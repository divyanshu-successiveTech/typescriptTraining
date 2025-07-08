'use client'
type Style={
    text:string,
    color:string;

}

const Button=({text,color}:Style)=>{

    return (
        <button onClick={(e)=>{
            const target= e.target as HTMLButtonElement
            target.innerHTML=text;
            target.style.backgroundColor = color;
        }}>Click</button>
    )

}

export default Button;