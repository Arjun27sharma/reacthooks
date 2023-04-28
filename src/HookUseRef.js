import React, {useRef} from 'react'


const HookUseRef = () => {
    const inputRef = useRef(null)
  return (
    <div>
        <input type="text" placeholder='Ex...' ref={inputRef}/> 
        {/* <p>to access the content of the box use ref.current.value</p> */}
        <button onClick={() => inputRef.current.value = ""}>Change Name</button>
    </div>
  )
}

export default HookUseRef