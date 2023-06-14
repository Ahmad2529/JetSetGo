import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';

import hotelLobby from '../../assets/img/hotel lobby.jpeg';
import motel from '../../assets/img/budget motel.jpeg';
import poolresort from '../../assets/img/pool resort.jpeg';
import dorms from '../../assets/img/dorms.jpeg';

import './style.css';

function Hotels() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="heading">Featured Hotels</h1>
        </div>

        <div className="container">
          <h2 className="subheading">Luxury</h2>
          <a href="...">
            <img
              className="thumbnails"
              src={hotelLobby}
              alt="Hotel Lobby"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={hotelLobby}
              alt="Hotel Lobby"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={hotelLobby}
              alt="Hotel Lobby"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={hotelLobby}
              alt="Hotel Lobby"
          /></a>
          <a href="...">
            <img
              className="thumbnails"
              src={hotelLobby}
              alt="Hotel Lobby"
          /></a>
        </div>
        <div className="container">
          <h2 className="subheading">Budget</h2>
          <a href="...">
            <img
              className="thumbnails"
              src={motel}
              alt="Small motel room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={motel}
              alt="Small motel room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={motel}
              alt="Small motel room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={motel}
              alt="Small motel room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={motel}
              alt="Small motel room"
          /></a>
        </div>
        <div className="container">
          <h2 className="subheading">Resort</h2>
          <a href="...">
            <img
              className="thumbnails"
              src={poolresort}
              alt="Poolside of a resort"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={poolresort}
              alt="Poolside of a resort"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={poolresort}
              alt="Poolside of a resort"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={poolresort}
              alt="Poolside of a resort"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={poolresort}
              alt="Poolside of a resort"
          /></a>
        </div>
        <div className="container">
          <h2 className="subheading">Dorms</h2>
          <a href="...">
            <img
              className="thumbnails"
              src={dorms}
              alt="Dorm room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={dorms}
              alt="Dorm room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={dorms}
              alt="Dorm room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={dorms}
              alt="Dorm room"
          /></a>
          <a href="..."
            ><img
              className="thumbnails"
              src={dorms}
              alt="Dorm room"
          /></a>
        </div>
      <Footer />
    </div>
  );
}

export default Hotels;
