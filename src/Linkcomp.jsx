import React from 'react'
import { Link } from 'react-router-dom';

function Linkcomp() {
  return (
    <div>
    <div className='link'>
      <Link to='/' style={{textDecoration: "none",color : "black"}}>Home</Link>
      <Link to='/bollywood' style={{textDecoration: "none",color : "black"}}>Bollywood</Link>
      <Link to='/technology' style={{textDecoration: "none",color : "black"}}>Technology</Link>
      <Link to='/hollywood' style={{textDecoration: "none",color : "black"}}>Hollywood</Link>
      <Link to='/fitness' style={{textDecoration: "none",color : "black"}}>Fitness</Link>
      <Link to='/food' style={{textDecoration: "none",color : "black"}}>Food</Link>
      </div> <hr/>
   
    </div>
      
    
  )
}

export default Linkcomp;