import { useState } from "react"
export default function Counter(){
    const [count,setCount]=useState(0);
    let counterStyle={
        border:'2px solid black',
    }
    return (
        <div style={counterStyle}>
            <h3>Count:{count}</h3>
            <button>Add:</button>
        </div>
    )
}