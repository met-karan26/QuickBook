/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mailblock from '../../components/EmailBlock/mailblock';
import Footer from '../../components/Footer/footer';
import "./individual.css";
import Reservation from '../../components/Reservation/reservation';


const individual = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/01/02/01/53/seat-1117599_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/02/07/18/24/bathroom-2046702_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/01/29/05/14/luxury-3115234_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/03/22/16/07/villa-2165428_960_720.jpg"
    }
  ]
  const handleClick = (sliderNumber) => {
    setSliderNumber(sliderNumber);
    setOpen(true);
  }
  
const[reserve,setReserve]=useState(false)

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    }
    else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSlideNumber);
  };
function handleReserve(reserve){
setReserve(!reserve);
}


  return (
    <>
    {reserve && <Reservation />}
      <Navbar type="link" />
      {open && <div className='slider'>
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
        <div className='picContainer'><img src={photos[sliderNumber].src} alt="full pic" className='fullPic' /></div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}
        />
      </div>}
      <div className="containerBlock indi">

        <div className=''><div className="singleblock"><h2>Glasshouse Resort</h2>
          <button className='see' onClick={()=>handleReserve(reserve)}>Reserve or Book Now</button></div>
          <p><FontAwesomeIcon icon={faLocationDot} /> Swaroop Nagar,Kanpur-208012</p>
          <p className='blue'>Excellent location - 500m from center</p>
          <p className='green'><b>Book a stay over ₹1200 at this property and get a free airport taxi.</b></p></div>
        <div className='display'>
          {photos.map((photo, i) =>
            <img onClick={() => handleClick(i)} src={photo.src} alt="roompic"></img>)}

        </div>
        <div className='singleblock blockbtm'>
          <div className='bloc'>
            <h3 >Stay in the heart of Kanpur</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos, cupiditate eaque adipisci quod beatae deleniti laborum libero cumque maxime corporis aperiam similique esse hic quia sed pariatur eum officiis voluptates natus ipsa. Explicabo temporibus ducimus saepe quasi nisi ex unde sed hic tenetur, magnam ullam accusamus, autem, nostrum culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos, cupiditate eaque adipisci quod beatae deleniti laborum libero cumque maxime corporis aperiam similique esse hic quia sed pariatur eum officiis voluptates natus ipsa.</p></div>
          <div className='block3'>
            <h3>Perfect for a 4-night stay</h3>
            <p>Located in the heart of Knapur,this property has an excellent location score of 9.8</p>
            <button className='see'  onClick={()=>handleReserve(reserve)}>Reserve or Book Now</button></div>
        </div>
      </div>
      <Mailblock />
      <Footer />
      <p style={{ fontSize: "15px" }}>© All Copyrights reserved by QuickBook 2023</p>
    </>
  )
}

export default individual