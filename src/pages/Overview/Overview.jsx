import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import logo from '../../assets/img/logo.svg';

import deal from '../../assets/img/deal.jpeg';
import poolResort from '../../assets/img/pool resort.jpeg';
import poolBeds from '../../assets/img/poolside beds.jpeg';
import beachCity from '../../assets/img/beach city.jpeg';
import beachWithBeds from '../../assets/img/tree beach with beds.jpeg';
import turtle from '../../assets/img/turtle.jpeg';
import map from '../../assets/img/map.jpeg';

import './style.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import React from 'react';
import { HotelService } from '../../services/hotel';

function Overview() {
  const [params] = useSearchParams();
  const [hotel, setHotel] = React.useState();
  React.useEffect(() => {
    const id = params.get('id');

    HotelService.get().then(res => {
      console.log(res)
      const hot = res.find(x => x.docId == id);
      console.log(hot);
      setHotel(hot);
    })
  }, [])

  const navigate = useNavigate();

  if (!hotel) return;
  return (
    <div>
      <Navbar />
      <h1 className="heading">{hotel.name}</h1>
      <div className="float-container">
        <div className="float-item-one">
          {/* <img
            className="vertical-image"
            src={hotel.image}
            alt="Promotional image of a limited time deal for 25% off"
          /> */}
          <br />
          <h3>Amenities</h3>
          <ul>
              {hotel.amenities.map(x => {
                return <li key={x}>{x}</li>
              })}
            </ul>
        </div>
        <div className="float-item-two">
          <img
            className="main-image"
            src={hotel.image}
            alt="A pool at a resort with lounge beds"
          />
          {/* <img
            className="previews"
            src={poolBeds}
            alt="Lounge beds around a pool"
          />
          <img
            className="previews"
            src={beachCity}
            alt="Aerial view of a tropical coastal city"
          />
          <img
            className="previews"
            src={beachWithBeds}
            alt="A beach with tropical trees and lounging beds"
          />
          <img
            className="previews"
            src={turtle}
            alt="An underwater photo of a turtle swimming"
          /> */}
          <p className='mt-5' id="resort-summary">
            {hotel.description}
          </p>
          <button
            className='btn btn-primary'
            onClick={() => navigate('/booking?id=' + hotel.docId)}
          >
            Book Now
          </button>
        </div>
      </div>
      <hr />
      <div className="container">
        <img
          id="map"
          src={map}
          alt="A navigational map of the city the resort is found in and the resort's location on it."
        />
      </div>
      <Footer />
    </div>
  );
}

export default Overview;
