/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {faBed,faJetFighter,faCab,faCar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../searchBar/search';
import "./navbar.css";
import Register from '../registration/register';


const Navbar = ({type}) => {

  const[register,openRegister]=useState(false);
  const[login,openLogin]=useState(false);

  const handleClick=()=>{
    

openLogin(!login);
  }
  return (
    <>
    {login &&<Register />}
    
  <div class="navbar">
    <div class="navlinks">
      <span class="logoname">QuickBook</span>
      {/* <div class="btn">
      <button type="submit" onClick={handleClick}>SignUp/SignIn</button>
      <button type="submit" onClick={handleClick}>Login</button>
      </div> */}
    </div>
   </div>
   
   <div className="header">
     <div className= { type === "link" ? "headerContainer listMode" : "headerContainer"}>
    
        <div className="headerList ">
            <div className="headerListIcons active">
            <FontAwesomeIcon icon={faBed} /><span >Stays</span>
            </div>
            <div className="headerListIcons">
            <FontAwesomeIcon icon={faJetFighter} /><span>Flights</span>
            </div>
            <div className="headerListIcons ">
            <FontAwesomeIcon icon={faCar} /><span>Car rentals</span>
            </div>
            <div className="headerListIcons">
            <FontAwesomeIcon icon={faBed} /><span>Attractions</span>
            </div>
            <div className="headerListIcons">
            <FontAwesomeIcon icon={faCab} /><span>Airport taxis</span>
            </div> 
            </div>
            
           {type!=="link" && 
            <> <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'>Get rewards for your travels-unlock instant savings of 10% or more with a free QuickBook account</p>
        <button type='submit' className='headerBtn' onClick={()=>handleClick()} >Sign in/Register</button> 
        <Search /> </>} </div> 
      
        
        </div>
    

    </>
  )
}

export default Navbar
