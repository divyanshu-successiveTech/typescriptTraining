type UserInfo ={
    name:string;
    email:string;
    image:string;
    
}

const UserCard =({name,email,image}:UserInfo)=>{

    return (

        <div>
            <p>{name} <br/>{email}<br/> <img src = {image}></img></p>
            
        </div>

    )


}

export default UserCard;