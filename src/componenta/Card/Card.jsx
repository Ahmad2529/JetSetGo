import './style.css';

function Card() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card mb-3">
            <img src="https://example.com/hotel.jpg" className="card-img" alt="Hotel Image" />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hotel Name</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, tellus eget dictum maximus, ipsum odio venenatis leo, eu cursus eros diam vitae nulla.</p>
              <ul className="list-unstyled">
                <li><i className="fas fa-map-marker-alt"></i> Hotel Location</li>
                <li><i className="fas fa-star"></i> Rating: 4.5/5</li>
                <li><i className="fas fa-money-bill"></i> Price: $100 per night</li>
              </ul>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
