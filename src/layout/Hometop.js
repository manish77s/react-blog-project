import React, { useContext } from 'react'
import { Store } from '../Datastore'
import './homestyle.css'
// import Bollywood from '../Bollywood'
// import Food from '../Foodcomp'
// import Hollywood from '../Hollywood'
import { Link } from 'react-router-dom'


const Hometop = () => {
  const [Homeup]= useContext(Store)
  return (
    <>
    <div className='homeup'>
           
    <div className='image-1'>
    {Homeup.filter((item) =>item.id===4).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h3>{data.heading}</h3> */}
          {/* <img className='imagetop' src={data.image}/> */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'> <img className='imagetop' src={data.image} alt='not found'/></Link>
        </div>
      )
        
     })}
    </div>     

 

    <div className='image-2'>
    {Homeup.filter((item) =>item.id===49).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h3>{data.heading}</h3> */}
          {/* <img className='imagetop2' src={data.image}/> */}
          <Link to={'/details/'+ data.id} state={data} ><img className='imagetop2' src={data.image} alt='not found'/></Link>
        </div>
      )
        
     })}
    </div>

      
     <div className='image-3'>
     {Homeup.filter((item) =>item.id===35).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h3>{data.heading}</h3> */}
          {/* <img className='imagetop2' src={data.image}/> */}
          <Link to={'/details/'+ data.id} state={data}><img className='imagetop2' src={data.image} alt='not found'/></Link>
          
        </div>
      )
      })}
     </div>
     
     </div>
     </>
  )
}

export default Hometop;