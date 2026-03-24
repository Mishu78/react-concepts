import { useState } from "react"
import Counter from './Counter'
export default function Baller(){
    const [balls,setBalls]=useState(0);
    const handleAddSingle =()=>{
    let newBall=balls+1;
    setBalls(newBall);
    }

    const handleAddSix =()=>{
    let newBall=balls+6;
    setBalls(newBall);
    }
    return (
        <div>
            <h3>Player:Bangla Baller</h3>
            <p>Score:{balls}</p>
            <button onClick={handleAddSingle}>single ball</button>
            <button>no ball</button>
            <button onClick={handleAddSix}>six ball</button>
        </div>
    )
}