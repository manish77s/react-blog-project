import React, { useContext} from 'react'
import { Store } from './Datastore';
import Commoncompo from './Commoncompo';
import { Link } from 'react-router-dom';


const Hollywood = () => {
  const [HoData]= useContext(Store)
  
  console.log(HoData)
  return (
    <div>
     
     <div className='containerComp'> 
 
 <h2>Hollywood</h2>  
 <div className='box1'>
  {HoData.filter((item) => item.category === 'Hollywood').map((data,index)=>{
   console.log(data);
   return(
     <div key={index}>
       {/* <h1>{data.heading}</h1> */}
       <Link to={'/details/'+ data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img src={data.image} alt='not found' className='compoimage'/></Link>
       {/* <img src={data.image} className='compoimage'/><hr /> */}
     </div>
   )
     
  })}
</div>



<Commoncompo/>

</div>
    </div>
  )
}

export default Hollywood;