import React from 'react'
// import { Store } from './Datastore';
import Hometop from './layout/Hometop'
import './style.css';
import Latest from './layout/Latest';
import Articals from './layout/Articals';
import Lateststory from './layout/Lateststory';
// import { Link } from 'react-router-dom';


function Home() {
  // const [HomeData]= useContext(Store)
  return (
    <div className='home'>

   <Hometop/>
   <Latest/>
   <Articals/>
   <Lateststory/>
   
    </div>
  )
}

export default Home;