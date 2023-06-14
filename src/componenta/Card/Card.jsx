import { useNavigate } from 'react-router-dom';
import './style.css';

function Card({
  info
}) {

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card mb-3">
            <img src={info.img} className="card-img" alt="Hotel Image" />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{info.name}</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, tellus eget dictum maximus, ipsum odio venenatis leo, eu cursus eros diam vitae nulla.</p>
              <ul className="list-unstyled">
                <li><i className="fas fa-map-marker-alt"></i> Hotel Location</li>
                <li><i className="fas fa-star"></i> Rating: 4.5/5</li>
                <li><i className="fas fa-money-bill"></i> Price: ${info.price} per night</li>
              </ul>
              <button onClick={() => navigate('/overview')} className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
