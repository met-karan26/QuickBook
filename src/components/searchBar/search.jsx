/* eslint-disable react-hooks/rules-of-hooks */
import  React from 'react';
import {faBed,faCalendar,faPerson} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';
import {format} from 'date-fns';
import "./search.css";
import { useState } from "react";
import{ useNavigate} from "react-router-dom";

const search = () => {
  const [openDate,setOpenDate]=useState(false);
  const [openOptions,setOpenOptions]=useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options,setOptions]=useState({
    adult:1,
    children:0,
    room:1
  });
  const [destination,setDestination]=useState("");
  const naviagte=useNavigate();

  const handelOpetion=(name,operation)=>{
    setOptions((prev)=>{return{
      ...prev,
      [name]:operation==="i"? options[name] +1 : options[name] -1,
    };});};

    const handleSearch=()=>{
naviagte("/searchresult",{state:{destination,date,options}})
    }

  return (
    <>
<div class="search">
   <div class="options">
   <FontAwesomeIcon icon={faBed} />
    <input type='text' className="data" placeholder="Where to go" onChange={e=>setDestination(e.target.value)} required/>
</div>
 <div class="options">
   <FontAwesomeIcon icon={faCalendar} />
    <span onClick={()=>setOpenDate(!openDate)} className="data">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`} </span>
   {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>}
</div>

 <div class="options">
   <FontAwesomeIcon icon={faPerson} />
    <span onClick={()=>setOpenOptions(!openOptions)}className="data">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
   { openOptions && <div class="options2">
      <div className='optionsItem'>

        <span className='optionText'>Adult</span>
        <div className="optionCounter">
        <button
        disabled={options.adult<=1} className='optionsCounterButton' onClick={()=>handelOpetion("adult","d")}>-</button>
        <span className='optionCounterNumber'>{options.adult}</span>
        <button className='optionsCounterButton' onClick={()=>handelOpetion("adult","i")}>+</button>
        </div>
      </div>
      <div className='optionsItem'>
        <span className='optionText'>Children</span>
        <div className="optionCounter">
        <button 
        disabled={options.children <=0} className='optionsCounterButton' onClick={()=>handelOpetion("children","d")}>-</button>
        <span className='optionCounterNumber'>{options.children}</span>
        <button className='optionsCounterButton' onClick={()=>handelOpetion("children","i")}>+</button>
        </div>
      </div>
      <div className='optionsItem'>
        <span className='optionText'>Rooms</span>
        <div className="optionCounter">
        <button
        disabled={options.room <=1} className='optionsCounterButton' onClick={()=>handelOpetion("room","d")}>-</button>
        <span className='optionCounterNumber'>{options.room}</span>
        <button className='optionsCounterButton' onClick={()=>handelOpetion("room","i")}>+</button></div>
      </div>
    </div>}
</div>
<button class='searchon' onClick={handleSearch}>Search</button>
</div>

    </>
  )
   }
export default search
