import { useState } from "react"
import "./Counter.css"
function Counter (){
    const [count,setCount] = useState(0)
    return(
        <div className="btn">
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;