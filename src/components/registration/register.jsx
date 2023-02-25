/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import "./register.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const register = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <>
   {open && <div className="baground">
    <div className="layer-1">
 <div className="register">
 <FontAwesomeIcon icon={faXmark} className="xmark" onClick={() => setOpen(false)} />
 
 <p className='signUp'>Sign Up</p>
 <div className="inner-container">
 <div className="tagline">
 <div className="tag2">
 <p>Login for great deals and offers</p>
 {/* <p>Let's get started</p>
 <p>Book your 1st room</p> */}
 </div>
 <form action='/' className='inputField'>
  <input type="text" placeholder='Name' required autoComplete='off'/>
  <input type="text" placeholder='Email' required autoComplete='on'/>
  <input type="password" placeholder='Password' required/>

  <input type="submit" className='btn' value="Sign Up" />
  <p>Already have and account? <a href='/'>Log in</a></p>
  
 </form>
 
 </div>
 <p className='policy'>By signing to create an account I accept <br />Company's <a href="/">Terms of Use and Privacy Policy.</a></p>
 </div>
</div></div>

 </div>}
    </>
  )
}

export default register