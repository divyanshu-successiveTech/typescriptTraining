'use client'

import { useReducer } from "react";



type VoteState = {
  A: number;
  B: number;
  C: number;
};


type VoteAction = { type: 'voteA' } | { type: 'voteB' } | { type: 'voteC' };

const voteReducer = (state: VoteState, action: VoteAction): VoteState => {
  switch (action.type) {
    case 'voteA':
      return { ...state, A: state.A + 1 };
    case 'voteB':
      return { ...state, B: state.B + 1 };
    case 'voteC':
      return { ...state, C: state.C + 1 };
    default:
      return state;
  }
};


const initialState: VoteState = {
  A: 0,
  B: 0,
  C: 0,
};


export default function Voting() {
  const [votes, dispatch] = useReducer(voteReducer, initialState);

  return (
    <>
      <h1>Voting App</h1>
      
        <button onClick={() => dispatch({ type: 'voteA' })}>Vote for A</button>
        <button onClick={() => dispatch({ type: 'voteB' })}>Vote for B</button>
        <button onClick={() => dispatch({ type: 'voteC' })}>Vote for C</button>
      

      <h3>Current Votes</h3>
      <ul>
        <li>A: {votes.A}</li>
        <li>B: {votes.B}</li>
        <li>C: {votes.C}</li>
      </ul>
    </>
  );
}