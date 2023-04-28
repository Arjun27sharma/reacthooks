import React, {useLayoutEffect, useEffect ,useRef} from 'react'

const HookUseLayoutEffect = () => {
    const inputRef = useRef(null)
    {/* the useLayoutEffect is called before the useEffect, irrespective of where you define it */}
    {/* the useEffect is called after the stuff is showed to us, but useLayoutEffect is called before showing us anything */}
    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, [])
    
    useEffect(() => {
        inputRef.current.value = "hello world"
    }, [])
  return (
    <div>
        <input type="text" value="Arjun" ref={inputRef}/>
    </div>
  )
}

export default HookUseLayoutEffect