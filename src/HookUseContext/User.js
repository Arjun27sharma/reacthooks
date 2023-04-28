import React, { useContext } from 'react'
import { AppContext } from './HookUseContext'

const User = () => {
    const {userName} = useContext(AppContext)
  return (
    <div>
        <h1>{userName}</h1>
    </div>
  )
}

export default User