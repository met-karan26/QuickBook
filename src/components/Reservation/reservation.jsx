/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./reservation.css";

const reservation = () => {
const [open, setOpen] = useState(true);
const[checked,setChecked]=useState(true);
const handleTick=(id)=>{
  setChecked(!checked);
  checked ? document.getElementById(id).style.backgroundColor="blue" : document.getElementById(id).style.backgroundColor="white" ;
  
}
  return (
    <>
   {open && 
   <div className="baground">
    <div className="layer-1">
 <div className="reserve">
 <FontAwesomeIcon icon={faXmark} className="xmark" onClick={() => setOpen(!open)} />
 
 <div className='room'>Select your rooms:</div>
 <div className="roomblock">
 
 <h2 className="roomType">Deluxe Room</h2>
 <div className='category'>
 <div className='group1'>
        <p>King size bed,1 balcony ,Bathroom</p>
        <p>Max people: <b>2</b></p>
        <p className='price'><b>₹16000</b></p></div>
<div className='group2'>
<div className='checkboxes'>
        <div className='icon' >
        <p>101</p>
        <div className='box' id="101" onClick={()=>handleTick(101)}></div>
        </div>
        <div className='icon inline'>
        <p>102</p>
        <p className='box' id="102" onClick={()=>handleTick(102)}></p>
        </div></div>
        <div className='checkboxes'>
        <div className='icon'>
        <p>103</p>
        <p className='box' id="103" onClick={()=>handleTick(103)}></p>
        </div>
        <div className='icon inline'>
        <p>104</p>
        <p className='box' id="104" onClick={()=>handleTick(104)}></p>
        </div>
        </div>

        
</div>
</div>

<h2 className="roomType">2 Bed Room</h2>
 <div className='category'>
 <div className='group1'>
        <p>2 small size bed,1 balcony ,Bathroom</p>
        <p>Max people: <b>2</b></p>
        <p className='price'><b>₹14000</b></p></div>
<div className='group2'>
<div className='checkboxes'>
        <div className='icon' >
        <p>201</p>
        <div className='box' id="201" onClick={()=>handleTick(201)}></div>
        </div>
        <div className='icon inline'>
        <p>202</p>
        <p className='box' id="202" onClick={()=>handleTick(202)}></p>
        </div></div>
        <div className='checkboxes'>
        <div className='icon'>
        <p>203</p>
        <p className='box' id="203" onClick={()=>handleTick(203)}></p>
        </div>
        <div className='icon inline'>
        <p>204</p>
        <p className='box' id="204" onClick={()=>handleTick(204)}></p>
        </div>
        </div>

        
</div>
</div>

<h2 className="roomType">Penthouse Apartment</h2>
 <div className='category'>
 <div className='group1'>
        <p>2 queen bed,1 bathroom, terrace</p>
        <p>Max people: <b>4</b></p>
        <p className='price'><b>₹28000</b></p></div>
<div className='group2'>
<div className='checkboxes'>
        <div className='icon' >
        <p>301</p>
        <div className='box' id="301" onClick={()=>handleTick(301)}></div>
        </div>
        <div className='icon inline'>
        <p>302</p>
        <p className='box' id="302" onClick={()=>handleTick(302)}></p>
        </div></div>
        

        
</div>

</div>
</div>
<form action="/">
<button type="submit"  className="now">Reserve Now!</button></form>
</div></div>
 </div>
 }
    </>
  )
}

export default reservation