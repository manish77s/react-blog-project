import React, { useContext } from 'react'
import { Store } from './Datastore'
import Commoncompo from './Commoncompo'
import { Link } from 'react-router-dom'

const Technology = () => {
  const [TData]= useContext(Store)
  return (
    <div>
       
    <div className='containerComp'> 
 
 <h2>New Technology</h2>  
 <div className='box1'>
  {TData.filter((item) => item.category === 'Technology').map((data,index)=>{
   console.log(data);
   return(
     <div key={index}>
       {/* <h1>{data.heading}</h1>
       
       <img src={data.image} className='compoimage'/><hr /> */}
       <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img src={data.image} alt='not found' className='compoimage'/></Link>
     </div>
   )
     
  })}
</div>



<Commoncompo/>

</div>
    </div>
  )
}

export default Technology;