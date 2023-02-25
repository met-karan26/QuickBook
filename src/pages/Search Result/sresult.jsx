/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { DateRange } from 'react-date-range';
import Bigfeatured from '../../components/BigFeatured/bigfeatured';
import {format} from 'date-fns';
import Cards from '../../Cards';
import Mailblock from '../../components/EmailBlock/mailblock';
import Footer from '../../components/Footer/footer';
import "./sresult.css";
import { useState } from 'react';
const Sresult = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptins] = useState(location.state.options);
  const [openDate,setOpenDate]=useState(false);
  const[rating,setRating]=useState(8);
  const[price,setPrice]=useState(15000);
  const[cards,setCards]=useState(Cards);

  const filterSearch=(rating,price)=>{
const updatedList=Cards.filter((curElem)=>{
  return curElem.rating>=rating && curElem.amount<=price;
});

setCards(updatedList);
  }
function handelChange(e){
  const val=e.target.value;
  setRating(val); 
}
function handelClick(e){
  const val=e.target.value;
  setPrice(val); 
}
console.log(rating);

  return (
    <>
      <Navbar type="link" />
      <div className='containerBlock'>
        <div className='containerSearch'>
          <div className="searchBlock">
            <h2>Search</h2>
            <div className='block'>
              <label>Destination</label>
              <input type="text" placeholder={destination}></input>
            </div>
            <div className='block'>
              <label>Check in</label>
              <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} </span>  </div>
              
              {openDate &&  <DateRange onChange={item => setDate([item.selection])} minDate={new Date()}  ranges={date} className="daterange"/>}
        
          <div className='block last'>
            <span>{`${location.state.options.adult} adult . ${location.state.options.children} children . ${location.state.options.room} room`}</span>
          </div>
          
          <label>Filter by :</label>
          <div className='filters'>
          <span>Rating more than:</span><input type="number" min="5" max="10"  value={rating} onChange={handelChange}></input>
          </div>
          <div className='filters'>
          <span>Price less than:</span><input type="text" value={price} onChange={handelClick}></input>
          </div>
          <button className='searchbtn' onClick={()=>filterSearch(rating,price)}>Search</button>
        </div>
      </div>
      <div className='featuredblock'>
</div>
<div className='cardblock'>
{cards.map((item,index)=>
  <Bigfeatured 
  id={item.index}
    pic={item.picURL}
    name={item.name}
    amount={item.amount}
    rating={item.rating}
    grade={item.grade}
  />
  
)}
</div>

    </div>
    <Mailblock />
    <Footer />

    </>
  )
}

export default Sresult