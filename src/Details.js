import React from 'react'
import { useLocation, useParams } from 'react-router-dom'




function Details() {
  
const {id}=  useParams();
const location = useLocation()
console.log(location)

    
return (
    <div>
      <h1>Details..</h1>
      <h2>{id.heading}</h2>
      <img src={id.image} alt='not found'/>
      <p>{id.description}</p>

    </div>
  )
}

export default Details;