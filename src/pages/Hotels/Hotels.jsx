import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';

import hotelLobby from '../../assets/img/hotel lobby.jpeg';
import motel from '../../assets/img/budget motel.jpeg';
import poolresort from '../../assets/img/pool resort.jpeg';
import dorms from '../../assets/img/dorms.jpeg';

import './style.css';
import React from 'react';
import { DestinationService } from '../../services/destinations';
import { HotelService } from '../../services/hotel';
import { useNavigate } from 'react-router-dom';

function Hotels() {
  const router = useNavigate();
  const [hotels, setHotels] = React.useState([]);
  React.useEffect(() => {
    // HotelService.add()

    HotelService.get().then(res => {
      console.log(res);
      setHotels(res.filter(x => +x.rating == 5))
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="heading">Featured Hotels</h1>
        </div>
        <div className="container">
        {/* <h2 className="subheading">Luxury</h2> */}
        {
          hotels.map((hotel, index) => {
            return (
                <span onClick={() => router('/overview?id=' + hotel.docId)} key={index}>
                  <div className='w-100'>
                    <img
                      className="thumbnails"
                      src={hotel.image}
                      alt="Hotel Lobby"
                  /></div>
                  <div className='text-center'><h5>{hotel.name}</h5></div>
                </span>
                
            )
          })
        }
      </div>
        
      <Footer />
    </div>
  );
}

export default Hotels;
