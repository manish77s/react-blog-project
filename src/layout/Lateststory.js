import React, { useContext } from 'react'
import { Store } from '../Datastore';
import './homestyle.css'
import { Link } from 'react-router-dom';
// import Hollywood from '../Hollywood';
// import Food from '../Foodcomp';
// import Fitness from '../Fitness';

const Lateststory = () => {
  const [Storylate]=useContext(Store)
  return (
  <>
  <hr/><h2>Latest story</h2><hr/>
    <div className='bottomstory'>
    <div className='homeStory'>
    {Storylate.filter((item) =>item.id===14).map((data,index)=>{
      console.log(data);
      return(
        <div key={index} className='borderStory'>
          
          {/* <img className='top4' src={data.image}/> */}
          {/* <h3>{data.heading}</h3> */}
         
          <Link to={'/details/'+ data.id}  state={data} className='textdeco'><h3>{data.heading.slice(0,25)}</h3> <img className='top4' src={data.image} alt='not found'/> <p>{data.description.slice(0,100)}</p> </Link> 
        </div>
      )
        
     })}
    </div>

    <div className='homeStory'>
    {Storylate.filter((item) =>item.id===51).map((data,index)=>{
      console.log(data);
      return(
        <div key={index} className='borderStory'>
          
          {/* <img className='top4' src={data.image}/> */}
          {/* <h3>{data.heading}</h3>
          <p>{data.description}</p>   */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading.slice(0,25)}</h3><img className='top4' src={data.image} alt='not found'/> <p>{data.description.slice(0,100)}</p> </Link> 
       
        </div>
       
      )
        
     })}
    </div>
    

    <div className='homeStory'>
    {Storylate.filter((item) =>item.id===37).map((data,index)=>{
      console.log(data);
      return(
        <div key={index} className='borderStory'>
          
          {/* <img className='top4' src={data.image}/> */}
          {/* <h3>{data.heading}</h3>
          <p>{data.description}</p>   */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading.slice(0,25)}</h3> <img className='top4' src={data.image} alt='not found'/><p>{data.description.slice(0,100)}</p> </Link> 
     
        </div>
      )
        
     })}
    </div>
    </div>
      
    </>
  )
}

export default Lateststory