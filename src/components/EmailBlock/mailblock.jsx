import React from 'react'
import "./mailblock.css"
const mailblock = () => {
  return (
    <div className='mailBlock'>
    <div className='taglines'>
    <p>Save time, save money!</p><br />
    Sign up and we'll send the best deals to you
</div>
    <div className='mailbox'>
        <input type="text" className='mail' name="email" placeholder='Your mail address'></input>
        <button className='subscribe' type="submit">Subscribe</button>
    </div>
    </div>
  )
}

export default mailblock