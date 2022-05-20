import React from "react";
import "../App.css";

const Counter = () =>{
    const [count,setCount] = React.useState(0);

    // const increase =()=> {
    //     setCount(count+1);
    // }
    // const decrease = () => {
    //     setCount(count-1);
    // }
    // const double = () =>{
    //     setCount(count*2);
    // }

    return (
        <div>
            <h1 className={count%2===1 ? "redClass" : "greenClass"}>Counter</h1>
            <h1>{count}</h1>
            {/* <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
            <button onClick={double}>Double</button> */}
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
            <button onClick={()=> setCount(count*2)}>Double</button>
        </div>
    )
};

export default Counter;