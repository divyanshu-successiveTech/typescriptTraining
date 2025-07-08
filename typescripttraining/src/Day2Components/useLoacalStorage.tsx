type SetterParameters={
    key:string,
    value:string;
}
type GetterParameters={
    key:string,
    
}
type RemoveParameters={
    key:string,
    
}

const useLocalStorage = () =>{

    const setter =({key,value}:SetterParameters)=>{
        localStorage.setItem(`${key}`,`${value}`);
    }

    const getter = ({key}:GetterParameters)=>{
        let ele=localStorage.getItem(`${key}`)
        console.log(ele);
        return !ele?"no such item" : ele;
    }

    const remove = ({key}:RemoveParameters)=>{
        localStorage.removeItem(key)
    }

    return {setter,getter,remove};
}

export default useLocalStorage;