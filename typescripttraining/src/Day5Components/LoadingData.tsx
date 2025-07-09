
let list :object[]= [];

const fetchData = (loading:boolean,setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{list = data; setLoading(true)})
        .catch((err)=>console.log(err));
    },2000);
}

export default function LoadingData({loading,setLoading}:{loading: boolean,setLoading: React.Dispatch<React.SetStateAction<boolean>>}){
    
    fetchData(loading,setLoading);

    return (
        <>
        {loading == false ? <></> : !Array.isArray(list) ? <h4> Server Error </h4> : <h4> {list.map((i,idx)=>{return <div key={idx}> {JSON.stringify(i)} <br/><br/></div>})} </h4>}
        </>
    );
}

export {fetchData}