import React,{useCallback, useState}  from 'react';

const Counter=()=>{
    const [count,setCount]=useState(0)

    const minusCount=useCallback(()=>{
        setCount(prev=>prev-1)
    },[count])

    const plusCount=useCallback(()=>{
        setCount(prev=>prev+1)
    },[count])

    return(
        <div className="counter">
            <h1>Im the counter</h1>
            <h2>test is it comp</h2>
            <button type="button" onClick={minusCount}>-</button>
            <h4>{count}</h4>
            <button type="button" onClick={plusCount}>+</button>
        </div>
    )
}

export default Counter;