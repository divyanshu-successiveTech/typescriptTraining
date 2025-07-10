type Temperature={
    temp:number ;
}

const Weather =({temp}:Temperature) =>{
    if(temp>25){
        return (<p> It's sunny today! </p>);

    }else if(temp<10){
        return (<p>It's cold today!</p>);
    }else{
        return (<p>Good Day</p>);
    }
}

export default Weather;