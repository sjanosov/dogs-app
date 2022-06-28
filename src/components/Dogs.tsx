import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dogs() {
    let navigate = useNavigate();
  return (
    <div>
        dogs
        <button onClick={() => navigate("/breeds")}>Learn more about dogs</button>
    </div>
  )
}

export default Dogs