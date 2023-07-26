import Card from '../../componenta/Card/Card';
import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import hotel2 from '../../assets/img/hotel2.jpg';
import hotel3 from '../../assets/img/hotel3.jpg';
import hotel4 from '../../assets/img/hotel4.jpg';
import './style.css';
import { HotelService } from '../../services/hotel';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Results() {
  const [params] = useSearchParams();
  const [hotels, setHotels] = React.useState([]);
  const [location, setLocation] =  React.useState('');
  const [rating, setRating] =  React.useState();

  React.useEffect(() => {
    const destination = params.get('location');
    const from = params.get('from');
    const to = params.get('to')

    setLocation(destination);
    document.getElementById('location').value = destination
  }, [])

  React.useEffect(() => {
    getList();
  }, [location, rating])

  const getList = () => {
    HotelService.get().then(res => {
      let filtered = res.filter(x => x.location.toLowerCase().includes(location.toLowerCase()));
      if(rating && rating != 'All') {
        filtered = filtered.filter(x => x.rating == +rating);
      }
      console.log(res);
      setHotels(filtered);
    })
  }

  const apply = () => {
    const val = document.getElementById('location').value;
    setLocation(val);
  }


  return (
    <div>
      <Navbar />
      <main className='main-results-section mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="filters">
                <h4>Filters</h4>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" className="form-control" id="location" />
                </div>
                <button className="btn btn-primary" onClick={() => apply()}>Apply Location</button>
                {/* <div className="form-group">
                  <label htmlFor="location">Min Price</label>
                  <input type="text" className="form-control" id="location" />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Max Price</label>
                  <input type="text" className="form-control" id="location" />
                </div> */}
                <div className="form-group">
                  <label htmlFor="rating">Rating</label>
                  <select onChange={(e) => setRating(e.target.value)} className="form-control" id="rating">
                    <option value={'All'}>All</option>
                    <option value={5}>5 stars</option>
                    <option value={4}>4 stars</option>
                    <option value={3}>3 stars</option>
                  </select>
                </div>
                
              </div>
            </div>
            <div className="col-md-9">
              <div className="search-results">
                <h2>Search Results</h2>
                <div className="mt-2">
                  {
                    hotels.map(hotel => {
                      return (
                        <Card key={hotel.docId} info={hotel} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default Results;
