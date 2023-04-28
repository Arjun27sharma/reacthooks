import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count : state.count + 1, showText : state.showText}
        case "TOGGLESHOWTEXT":
            return {count : state.count, showText : !state.showText}    
        default:
            return state
    }
}
const HookUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count :0, showText:""})
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => {
            dispatch({type : "INCREMENT"}); 
            dispatch({type : "TOGGLESHOWTEXT"})
        }}>Click</button>
        <p>{state.showText && "this is the text"}</p>
    </div>
  )
}

export default HookUseReducer