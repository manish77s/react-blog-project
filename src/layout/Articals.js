import React, { useContext } from 'react'
import { Store } from '../Datastore';
import './articalComp.css'
// import Technology from '../Technology';
import { Link } from 'react-router-dom';
// import Food from '../Foodcomp';

const Articals = () => {
    const [Artical]= useContext(Store)
  return (
    <>
    <h2>Latest Articals</h2><hr/>
   <div className='container'>
 
    <div className='container1'>
    <div className='box'>
    {Artical.filter((item) =>item.id===28).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img className='img' src={data.image} alt='not found'/></Link><hr/>
        </div>
      )
        
     })}
    </div>
    <div className='box'>
    {Artical.filter((item) =>item.id===50).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h3>{data.heading}</h3>
          <img className='img3' src={data.image}/> <hr/> */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img className='img' src={data.image} alt='not found'/></Link>
          <hr/>
        </div>
      )
        
     })}
    </div>
    <div className='box'>
    {Artical.filter((item) =>item.id===20).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h3>{data.heading}</h3>
          <img className='img4' src={data.image}/> <hr/> */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img className='img' src={data.image} alt='not found'/></Link><hr/>
        </div>
      )
        
     })}
    </div>
      <div className='box'>
    {Artical.filter((item) =>item.id===60).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h3>{data.heading}</h3> 
          <img className='img5' src={data.image}/>  */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img className='img' src={data.image} alt='not found'/></Link><hr/>
          
          
        </div>
      )
        
     })}
    </div>
    <div className='box'>
    {Artical.filter((item) =>item.id===10).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h3>{data.heading}</h3> 
          <img className='img6' src={data.image}/>  */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img className='img6' src={data.image} alt='not found'/></Link>
        </div>
      )
        
     })}
    </div>

    </div>
    <div className='parant'>
        <div className='addver'>advertisement</div>
        <h3>Top Post</h3>
        <div className='child1'>
    {Artical.filter((item) =>item.id===55).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='topimage' src={data.image}/>
          <h3>{data.heading}</h3>  */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><img className='topimage' src={data.image} alt='not found'/><h3>{data.heading}</h3></Link>
          <hr/>
        </div>
      )
        
     })}
    </div>

    <div className='child2'>
    {Artical.filter((item) =>item.id===22).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3>  <hr/> */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt='not found'/><h3>{data.heading}</h3></Link>
         <hr/>
        </div>
      )
        
     })}
    </div>

    <div className='child3'>
    {Artical.filter((item) =>item.id===25).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3>  */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt='not found'/><h3>{data.heading}</h3></Link>
           <hr/>
        </div>
      )
        
     })}
    </div>

    <div className='child4'>
    {Artical.filter((item) =>item.id===16).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3> */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt='not found'/><h3>{data.heading}</h3></Link>
           <hr/>
        </div>
      )
        
     })}
    </div>

    <div className='child5'>
    {Artical.filter((item) =>item.id===59).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3>   */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt='not found'/><h3>{data.heading}</h3></Link>
          <hr/>
        </div>
      )
        
     })}
    </div>
    <div className='child6'>
    {Artical.filter((item) =>item.id===54).map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          
          {/* <img className='top4' src={data.image}/>
          <h3>{data.heading}</h3>   */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><img className='top4' src={data.image} alt='not found'/><h3>{data.heading}</h3></Link>
        </div>
      )
        
     })}
    </div>
    
   </div>
   </div>

    </>
  )
}

export default Articals;