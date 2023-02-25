import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/Featured/featured';
import Feature from '../../featured';
import PropertyType from '../../components/Property/propertyType';
import LovedHotels from '../../components/LovedHotels/lovedHotels';
import Cards from '../../Cards';
import Mailblock from '../../components/EmailBlock/mailblock';
import Footer from '../../components/Footer/footer';
import "./Home.css";

const Home = () => {
  return (
    <> <Navbar />

      <div className='container'>
        <div className='featured'>
          {Feature.map(item => (
            <Featured
              key={item.id}
              imgURL={item.imgURL}
              name={item.name}
              rooms={item.rooms}
            />
            
          ))}</div>
          
        <div className="categories"><h3>Browse by Property type</h3>
          <PropertyType /></div>
        <div className='favhome'>
          <h3>Homes guests love</h3>
          <div className='featuredBlock'>
            {Cards.map(card => (
              <LovedHotels
                picURL={card.picURL}
                name={card.name}
                area={card.area}
                amount={card.amount}
                rating={card.rating}
                grade={card.grade}
                nrev={card.nrev} />
            ))}</div>
        </div>
        </div>
<Mailblock />
<Footer />
<p style={{fontSize:"15px"}}>© All Copyrights reserved by QuickBook 2023</p>
    </>
  )
}

export default Home