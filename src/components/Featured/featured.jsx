import React from 'react'
import "./featured.css";
const featured = (props) => {
  return (
    <div className="featured">
    <div className='featuredItem'>
    <img src={props.imgURL} alt='img' className='featurePic'></img>
    <div className='picInfo'><h2>{props.name}</h2><h3>{props.rooms} properties</h3>
    </div>
    </div>
{/* 
    <div className='featuredItem'>
    <img src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' className='featurePic'></img>
    <div className='picInfo'><h2>New York</h2><h3>273 hotels</h3></div></div>

    <div className='featuredItem'>
    <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' className='featurePic'></img>
    <div className='picInfo'><h2>London</h2><h3>273 hotels</h3></div></div> */}
    </div>
  )
}

export default featured