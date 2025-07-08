
"use client"
import { useEffect, useState } from "react"


function AssessmentQuestion(){

    type SquareValue = string | number;



    const[ask,setAsk] = useState<string>("")
    const [turn, setTurn] = useState<string>("user");
    const [AllSquares, setAllSquares] = useState<(string|number)[]>(Array(9).fill(-1));
    const [winner, setWinner] = useState<string>("");
    

    function Square({ value, onAction }:{value:SquareValue,onAction:()=>void}) {
        return (
            <button onClick={onAction}>
            {value}
            </button>
        );
    }


    function checkWinner(squares:(number|string)[]):string {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
      ];

      for (let [a, b, c] of lines) {
        if (squares[a] !== -1 && squares[a] === squares[b] && squares[a] === squares[c]) {
            let str=""
            str+=squares[a];
          return str
        }
      }

      if (!squares.includes(-1)) {
        return "Draw";
      }

      return "";
    }
  
    function handleClick(i:number) {
      if (turn !== "user" || AllSquares[i] !== -1 || winner) return;

    const newSquares = [...AllSquares];
    newSquares[i] = ask;
    setAllSquares(newSquares);

    const result = checkWinner(newSquares); 
    if (result) {
      setWinner(result);
    } else {
      setTurn("comp");
    }
  }

  function generateRandom(){

    const curr = Math.floor(Math.random() * 9);
    return curr;

  }

  

  function comp(){

    if (turn !== "comp" || winner) return;

    let attempts = 0;
    let obt = generateRandom();

    while (AllSquares[obt] !== -1 && attempts < 20) {
      obt = generateRandom();
      attempts++;
    }

    if (AllSquares[obt] === -1) {
      const newSquares = [...AllSquares];
      newSquares[obt] = ask.toUpperCase() === "X" ? "O" : "X";
      setAllSquares(newSquares);

      const result = checkWinner(newSquares); 
      if (result) {
        setWinner(result);
      } else {
        setTurn("user");
      }
    }

  }





   useEffect(() => {
    if (turn === "comp") {
      const timeout = setTimeout(() => comp(), 300);
      return () => clearTimeout(timeout);
    }
  }, [turn, AllSquares]);
    return (
      <>

      <input value={ask} placeholder="Enter X or O" onChange={(e)=>setAsk(e.target.value)}></input>
      <br/>
        
          <Square value={AllSquares[0]} onAction={() => handleClick(0)} />
          <Square value={AllSquares[1]} onAction={() => handleClick(1)} />
          <Square value={AllSquares[2]} onAction={() => handleClick(2)} />
            <br/>
        
          <Square value={AllSquares[3]} onAction={() => handleClick(3)} />
          <Square value={AllSquares[4]} onAction={() => handleClick(4)} />
          <Square value={AllSquares[5]} onAction={() => handleClick(5)} />
            <br/>
        
          <Square value={AllSquares[6]} onAction={() => handleClick(6)} />
          <Square value={AllSquares[7]} onAction={() => handleClick(7)} />
          <Square value={AllSquares[8]} onAction={() => handleClick(8)} />
            <br/>   

      
      {winner && (
        <h3>{winner === "Draw" ? "It's a draw!" : `Winner: ${winner}`}</h3>
      )}
       
      </>
    );




   
}

export default AssessmentQuestion