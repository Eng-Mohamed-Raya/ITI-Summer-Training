import { useState } from "react";


function Counter() {
    const [counter,setCounter]=useState(0);

    const handelIncrement=()=>setCounter(counter+1)
    const handelDecrement=()=>{
        if(counter>0)setCounter(counter-1);
    }
    const handelIncrementByValue=val=>setCounter(counter+val)
    const handelReset=()=>setCounter(0)
    return (
        <div className="container">
            <p>Count: {counter}</p>
            <button type="button" onClick={handelIncrement} className="btn" style={{backgroundColor:"green"}}>Increment</button>
            <button type="button" onClick={ handelDecrement} className="btn" style={{backgroundColor:"blue"}}>Decrement</button>
            <button type="button" onClick={()=>handelIncrementByValue(10)} className="btn" style={{backgroundColor:"yellowGreen"}}>Increment by value</button>
            <button type="button" onClick={handelReset} className="btn" style={{backgroundColor:"red"}}>reset</button>
        </div> );
}

export default Counter;