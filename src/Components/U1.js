// useReducer 
// useReducer => UseState 


import React, { useReducer } from 'react';

let initialState = {a: 0, b: 0}

let reducer = (count, actions) => {
    /*
     actions = {
            type: 'incrementA',
            value: 1
     }

    */
      
  switch(actions.type){
      case 'incrementA':
          return  {...count, a: count.a + actions.value}
      case 'incrementB':
            return {...count, b: count.b + actions.value}
      case 'decrementA':
          return {...count, a: count.a - actions.value}
      case 'decrementB':
            return {...count, b: count.b - actions.value}
      case 'reset':
          return initialState
  }
}
const U1 = () => {
       let [count1, dispatch1]  = useReducer(reducer,  initialState) 
       let [count2, dispatch2]  = useReducer(reducer,  initialState)
  return(
    <div>
           <h1>{count1.a}, {count1.b}</h1>
           <h1>  {count2.a}, {count2.b} </h1>

        <button onClick= {()=>dispatch1({type: 'incrementA', value: 1})}> Increment A - count1</button>
        <button onClick= {()=>dispatch2({type: 'incrementA', value: 1})}> Increment B - count1</button>
            
    </div>
  )
}

export default U1;