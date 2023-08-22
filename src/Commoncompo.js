import React, { useContext } from 'react'
import './style.css'
import { Store } from './Datastore'
// import Hollywood from './Hollywood'
// import Food from './Foodcomp'
import { Link } from 'react-router-dom'

const Commoncompo = () => {
    const[allcomp]=useContext(Store)
  return (
    <>
    <div className='parant'>
        <div className='addver'>advertisement</div>
        <h3>Top Post</h3>
        <div className='child1'>
    {allcomp.filter((item) =>item.id===55).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          <Link to={'details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img className='topimage' src={data.image} alt=''/></Link>
          {/* <img className='topimage' src={data.image}/>
          <h3>{data.heading}</h3>  */}
        </div>
      )
        
     })}
    </div>

    <div className='child2'>
    {allcomp.filter((item) =>item.id===22).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          <Link to={'/details/' + data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt=''/><h3>{data.heading}</h3></Link>
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3>   */}
          <hr/>
        </div>
      )
        
     })}
    </div>

    <div className='child3'>
    {allcomp.filter((item) =>item.id===25).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          <Link to={'/details/' + data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt=''/><h3>{data.heading}</h3></Link>
          {/* <img className='top4' src={data.image}/> */}
          {/* <h3>{data.heading}</h3>  <hr/> */}
          <hr/>
        </div>
      )
        
     })}
    </div>

    <div className='child4'>
    {allcomp.filter((item) =>item.id===16).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3>  */}
          <Link to={'/details/' + data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt=''/><h3>{data.heading}</h3></Link>
          <hr/>
        </div>
      )
        
     })}
    </div>

    <div className='child5'>
    {allcomp.filter((item) =>item.id===59).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3> */}
          <Link to={'/details/' + data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt=''/><h3>{data.heading}</h3></Link>
            <hr/>
        </div>
      )
        
     })}
    </div>
    <div className='child6'>
    {allcomp.filter((item) =>item.id===54).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3>   */}
          <Link to={'/details/' + data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt=''/><h3>{data.heading}</h3></Link>
        </div>
      )
        
     })}
    </div>
         
   </div>
    </>
  )
}

export default Commoncompo;