


import React, {useState} from "react";


const U2 = () => {
    let [count, setCount] = useState({a:0})

    const increment = (value) => {
             setCount({...count, a: count.a + value})
    }

    const decrement = (value) => {
        setCount({...count, a: count.a - value})
    }

    const reset = () => {
        setCount({a:0})
    }


    return(
        <div>
            <h1>{count.a}</h1>
            <button onClick={()=>increment(1)}> Increment 1</button>
            <button onClick={()=>increment(5)}> Increment 5</button>
            <button> Decrement 1</button>
            <button> Decrement 3</button>
            <button> Reset</button>
        </div>
    )

}