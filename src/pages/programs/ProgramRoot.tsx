import React from 'react'
import { useLocation } from 'react-router-dom'

const ProgramRoot:React.FC = () => {
    const location=useLocation();

    console.log(location.pathname)
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default ProgramRoot
