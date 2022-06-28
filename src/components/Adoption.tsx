import React from 'react'
import { useParams } from 'react-router-dom'

function Adoption() {
      let {dogname} = useParams();
  return (
    <div>Website for {dogname} </div>
  )
}

export default Adoption