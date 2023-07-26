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
            <img src={info.image} className="card-img" alt="Hotel Image" />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{info.name}</h5>
              <p className="card-text">{info.description}</p>
              <ul className="list-unstyled">
                <li><i className="fas fa-map-marker-alt"></i> {info.area}</li>
                <li><i className="fas fa-star"></i> Rating: {info.rating}/5</li>
                <li><i className="fas fa-money-bill"></i> Starting from: ${info.standardRooms.unitPrice} per night</li>
              </ul>
              <button onClick={() => navigate('/overview?id=' + info.docId)} className="btn btn-primary">See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
