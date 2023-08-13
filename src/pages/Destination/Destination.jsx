import React from 'react';
import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import { DestinationService } from '../../services/destinations';
import './style.css';

function Destination() {
  const [destinations, setDestinations] = React.useState([]);
  React.useEffect(() => {

    DestinationService.get().then(res => {
      console.log(res);
      console.log(res.filter(x => +x.rating == 5))
      setDestinations(res.filter(x => +x.rating == 5))
    })
  }, [])

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
          {
            destinations.map(dest => {
              return (
                <div key={dest.docId} className="col-6 main">
                  <h2 className="sub-head">{dest.location}</h2>
                  <img
                    src={dest.image}
                    className="img-resort"/>
                    <p className="para">
                      {dest.description}
                    </p>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Destination;
