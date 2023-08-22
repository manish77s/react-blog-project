import React, { useContext } from 'react'
import { Store } from './Datastore';
import './style.css'
import Commoncompo from './Commoncompo';
// import Details from './Details';
import { Link } from 'react-router-dom';



function Bollywood() {
  const [BoData]= useContext(Store)

  return (
    <>
    
    <div className='containerComp'> 
 
    <h2>Bollywood</h2>  
    <div className='box1'>
     {BoData.filter((item) => item.category === 'Bollywood').map((data,index)=>{
      console.log(data);
      return(
        <div key={index}>
          {/* <h1>{data.heading}</h1> */}
          <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img src={data.image} alt='not found' className='compoimage'/></Link>
          <hr />
        </div>
      )
        
     })}
   </div>
   
   
   
   <Commoncompo/>

</div>
</>
  )
}

export default Bollywood;