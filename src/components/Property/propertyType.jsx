import React from 'react';
import "./propertyType.css";

const propertyType = () => {
  return (<>
<div className='featuredBlock'>
   <div className='featuredCard'>
    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' className='featureImg'></img>
    <div className='picDesc'>
       <h2>Hotels</h2>
       <h3>573 hotels</h3>
    </div>
  </div>
  <div className='featuredCard'>
    <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' className='featureImg'></img>
    <div className='picDesc'>
       <h2>Apartments</h2>
       <h3>293 apartments</h3>
    </div>
  </div>
  <div className='featuredCard'>
    <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' className='featureImg'></img>
    <div className='picDesc'>
       <h2>Resort</h2>
       <h3>173 resorts</h3>
    </div>
  </div>
  <div className='featuredCard'>
    <img src="https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' className='featureImg'></img>
    <div className='picDesc'>
       <h2>Villas</h2>
       <h3>473 villas</h3>
    </div>
  </div>

  <div className='featuredCard'>
    <img src="https://images.pexels.com/photos/290518/pexels-photo-290518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' className='featureImg'></img>
    <div className='picDesc'>
       <h2>Cabins</h2>
       <h3>223 cabins</h3>
    </div>
  </div>
</div>

  </>
   
  )
}

export default propertyType