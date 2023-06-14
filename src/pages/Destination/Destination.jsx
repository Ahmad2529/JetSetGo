import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import './style.css';

function Destination() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className=" heading">
            <h1>Featured Destinations</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 main">
            <h2 className="sub-head">Country</h2>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/56/da/ff/ac-huts.jpg?w=700&h=-1&s=1"
              className="img-resort"/>
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ducimus numquam tempora laudantium voluptatibus 
              itaque accusamus.
            </p>
          </div>
          <div className="col-6 main">
            <h2 className="sub-head">Country</h2>
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/16/b2/10/48/the-sense-resort-view.jpg"
              className="img-resort"/>
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ducimus numquam tempora laudantium voluptatibus 
                itaque accusamus.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 main">
            <h2 className="sub-head">Country</h2>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/377910508.jpg?k=6decbd5d0b23716a42895cfc29078a74f3a1478c5e1a47d4cb90c617343c5220&o=&hp=1"
              className="img-resort"/>
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ducimus numquam tempora laudantium voluptatibus 
                itaque accusamus.</p>
          </div>
          <div className="col-6 main">
            <h2 className="sub-head">Country</h2>
            <img
              src="https://media.istockphoto.com/id/168301497/photo/luxurious-hawaiian-5-star-resort.jpg?s=612x612&w=0&k=20&c=-xiwadofhhsgARGhxNPB6L8MbnQ1HRVhbyOKdQZyRtc="
              className="img-resort"/>
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ducimus numquam tempora laudantium voluptatibus 
                itaque accusamus.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Destination;
