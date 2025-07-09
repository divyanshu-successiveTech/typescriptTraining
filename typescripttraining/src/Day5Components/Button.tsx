"use client"
import { fetching } from "./FetchInAnother"

export default function Button(){

    return(
        <button onClick={fetching}>Reload</button>
    )

}