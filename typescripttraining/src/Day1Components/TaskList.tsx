

type NamedList = {
    curr : string

}

type TaskList = {
    list : string[]
}


function AddElement({curr}:NamedList){
    return(<li>{curr}</li>)
}


const TaskList =({list}:TaskList)=>{

    let arr = list.map((ele)=>< AddElement curr = {ele} />)
    return(
        <div><ol>{arr}</ol></div>
    )
    
}

export default TaskList;