/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "./bigfeatured.css";

import {Link} from 'react-router-dom';

const bigfeatured = (props) => {
  
    return(<>
<div className='featuredbbox'>
    <img src={props.pic} alt='room'></img>
    <div className='describe'>
    <div className='firstline'>
        <h2>{props.name}</h2>
        <div className='block2'>
        <div className='review r2'>{props.grade}</div>
        <div className='rating t2'>{props.rating}</div></div></div>
        <p>500m from center</p>
        <p className='greenbox'>Free airport taxi</p>
        <p><b>Studio Apartment with Air conditioning</b></p>
        <div className='singleblock'>
        <p>Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed</p>
        <span className='price'>₹{props.amount}</span>
        </div>
        <div className='singleblock'>
        <p className='green'><b>Free cancellation</b></p>
        <p>Includes taxes and fees</p></div>
        <div className='singleblock'>
        <p className='green'>You can cancel later,so look in this great price today.</p>
        <Link to="/hotel/:id"  className='see'>See Availabilty</Link></div>
    </div>
</div>
    </>
  )
}

export default bigfeatured