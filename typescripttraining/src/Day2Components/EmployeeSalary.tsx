
'use client'
import { useState ,useMemo } from "react";
interface Employee{
    employee:string,
    salary:string;
}

const EmployeeSalary = ()=>{

    let [CurrentEmployees,setCurrentEmployees] =useState<Employee[]>([])
    

    const [employee,setEmployee] = useState("");
    const [salary,setSalary] = useState("");

    let avg:number = 0;
    avg = useMemo<number>(()=>{
        let n=CurrentEmployees.length;
        let sum=0;
        for(let i of CurrentEmployees){
            sum += parseFloat(i.salary);
        }
        if(!avg){
            return 0;
        }else{
            return sum/n;
        }
    },[CurrentEmployees]); 

    

    return (

        <>
        {avg}<br/>
        <input value={employee} placeholder="Enter name of Employee" onChange={(e)=>setEmployee(e.target.value)}></input>
        
        <input value={salary} placeholder="Enter the salary" onChange={(e)=>setSalary(e.target.value)}></input>

        <button onClick={()=>setCurrentEmployees([...CurrentEmployees,{employee , salary}])}>SUBMIT</button>
        
        </>
    )
    



}

export default EmployeeSalary;