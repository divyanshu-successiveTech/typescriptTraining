interface prophandler {
    variant:string,
    text:string,
    handleClick:()=>void
}

function ButtonComponent({variant,text,handleClick}:prophandler){

    let style = {};

  if (variant === 'primary') {
    style = { backgroundColor: 'blue', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' };
  } else if (variant === 'secondary') {
    style = { backgroundColor: 'gray', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' };
  } else if (variant === 'danger') {
    style = { backgroundColor: 'red', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' };
  }


    return(
        <>
        <button  style={style} onClick={(e)=>handleClick()}>{text} </button>
        
        </>
    )
}

export default ButtonComponent