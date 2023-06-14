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

function Overview() {
  return (
    <div>
      <Navbar />
      <h1 className="heading">Resort / Destination Name</h1>
      <div className="float-container">
        <div className="float-item-one">
          <img
            className="vertical-image"
            src={deal}
            alt="Promotional image of a limited time deal for 25% off"
          />
          <br />
          <p className="main-image-caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="float-item-two">
          <img
            className="main-image"
            src={poolResort}
            alt="A pool at a resort with lounge beds"
          />
          <img
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
          />
          <p id="resort-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            volutpat commodo sed egestas. Eget nulla facilisi etiam dignissim diam
            quis enim. Dictum sit amet justo donec. Consectetur purus ut faucibus
            pulvinar elementum integer. Sit amet cursus sit amet dictum sit amet.
            Nisi lacus sed viverra tellus in hac habitasse. Dui faucibus in ornare
            quam viverra orci sagittis eu. Arcu non sodales neque sodales ut etiam
            sit amet. Euismod lacinia at quis risus sed vulputate odio ut enim.
            Nullam vehicula ipsum a arcu. Amet nulla facilisi morbi tempus iaculis
            urna id volutpat. Odio tempor orci dapibus ultrices in iaculis nunc
            sed. Est ultricies integer quis auctor elit sed. Pellentesque nec nam
            aliquam sem et tortor consequat id. Pharetra vel turpis nunc eget
            lorem dolor sed. Convallis tellus id interdum velit laoreet id. Congue
            quisque egestas diam in arcu cursus euismod. Odio eu feugiat pretium
            nibh ipsum consequat nisl.
          </p>
          <button
            id="booking-button"
            onClick={() => window.location.href='https://google.com'}
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
