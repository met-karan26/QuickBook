import React from 'react'
import "./lovedHotels.css"
const lovedHotels = (props) => {
  return (
    <div>
    <div className='featuredCard'>
     <img src={props.picURL} alt='img' className='featurePics'></img>
     <div className='picDesc'>
        <h2>{props.name}</h2>
        <h3>{props.area}</h3>
        <h3>Starting from <span className='amount'> ₹{props.amount}</span></h3>
        <p><span className='rating'>{props.rating}</span><span className='review'>{props.grade}</span>· {props.nrev} reviews</p>
     </div>
   </div>
   
 </div>
  )
}

export default lovedHotels