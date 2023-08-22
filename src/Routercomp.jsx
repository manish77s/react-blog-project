import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Technology from './Technology'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Food from './Foodcomp'
import './style.css'
import Linkcomp from './Linkcomp'

import Storecomp from './Datastore'
import Details from './Details'

function Routercomp() {
  return (
    <div className='allcomp'>
 <BrowserRouter>
          
        <Storecomp>
       <Linkcomp/>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/bollywood' element={<Bollywood/>}/>
       <Route path='/technology' element={<Technology/>}/>
       <Route path='/hollywood' element={<Hollywood/>}/>
       <Route path='/fitness' element={<Fitness/>}/>
       <Route path='/food'element={<Food/>}/>
        
       <Route path="//details/:id" element={<Details/>} />
       <Route path='/bollywood/details/:id' element={<Details/>}/>
       <Route path='/technology/details/:id' element={<Details/>}/>
       <Route path='/hollywood/details/:id' element={<Details/>}/>
       <Route path='/fitness/details/:id' element={<Details/>}/>
       <Route path='/food/details/:id'element={<Details/>}/>
       




       </Routes>
       </Storecomp>
       </BrowserRouter>
        

    </div>
       
  )
}

export default Routercomp;