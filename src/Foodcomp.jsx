import React, { useContext } from 'react'
import { Store } from './Datastore';
import Commoncompo from './Commoncompo';
import { Link } from 'react-router-dom';

function Food() {
  const [FuData]=useContext(Store)
  return (
    <div>
      
      <div className='containerComp'> 
 
 <h2>Food item</h2>  
 <div className='box1'>
  {FuData.filter((item) => item.category === 'Food').map((data,index)=>{
   console.log(data);
   return(
     <div key={index}>
       {/* <h1>{data.heading}</h1> */}
       <Link to={'/details/' + data.id} state={data} className='textdeco'><h3>{data.heading}</h3><img src={data.image} alt='not found' className='compoimage'/></Link>
       <hr />
     </div>
   )
     
  })}
</div>



<Commoncompo/>

</div>
    
    </div>
  )
}

export default Food;