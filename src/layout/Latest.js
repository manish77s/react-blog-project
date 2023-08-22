import React, { useContext } from 'react'
import './homestyle.css'
import { Store } from '../Datastore'
import { Link } from 'react-router-dom'
// import Food from '../Foodcomp'
// import Fitness from '../Fitness'
// import Hollywood from '../Hollywood'

const Latest = () => {
  const [Story]= useContext(Store)
  return (
    <div>
       <h1>The Latest</h1>
      <div className='latestComp'>
      <div>
    {Story.filter((item) =>item.id===45).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
      <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img src={data.image} alt='not found' className='compoimage' /></Link>
          {/* <img className='img' src={data.image}/>
          <h3>{data.heading}</h3> */}
        </div>
        
      )
        
     })}

     </div>

     <div>
    {Story.filter((item) =>item.id===51).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img src={data.image} alt='not found' className='compoimage'/></Link>
          {/* <img className='img' src={data.image}/>
          <h3>{data.heading}</h3> */}
        </div>
        
      )
        
     })}

     </div>

     <div className='story'>
    {Story.filter((item) =>item.id===23).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
         <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img src={data.image} alt='not found' className='compoimage'/></Link>
          {/* <img className='img' src={data.image}/>
          <h3>{data.heading}</h3> */}
          
        </div>
        
      )
        
     })}

     </div>
      </div>
    </div>
  )
}

export default Latest;