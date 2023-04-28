import React from 'react'

const HookUseState = () => {
    const [count, setCount] = React.useState(0)
    const [inputVal, setInputVal] = React.useState('initial value')
  return (
    <div>
        <div>
            {count}
            <button onClick={() => setCount(count+1)}>Inc+</button>
            <button onClick={() => setCount(count-1)}>Dec-</button>
        </div>

        <div>
            <input type="text" placeholder='enter something...' onChange={(event) => {setInputVal(event.target.value)}}/>
            {inputVal}
        </div>
    </div>
  )
}

export default HookUseState