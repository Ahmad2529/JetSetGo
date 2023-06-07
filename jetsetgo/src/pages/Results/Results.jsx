import Card from '../../componenta/Card/Card';
import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import './style.css';

function Results() {
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
                <div className="form-group">
                  <label htmlFor="rating">Rating</label>
                  <select className="form-control" id="rating">
                    <option>All</option>
                    <option>5 stars</option>
                    <option>4 stars</option>
                    <option>3 stars</option>
                  </select>
                </div>
                <button className="btn btn-primary">Apply Filters</button>
              </div>
            </div>
            <div className="col-md-9">
              <div className="search-results">
                <h2>Search Results</h2>
                <div className="mt-2">
                  <Card />
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
