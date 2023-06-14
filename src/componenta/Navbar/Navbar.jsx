import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

import './style.css';

function Navbar() {
  const router = useNavigate();

  function navigate(url) {
    router(url);
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src={logo}
            alt="Hotel Lobby"
          />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto me-4">
            <li className="nav-item">
              <a className="nav-link" href="/hotel">Hotels</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/destination">Destinations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
          </ul>
          <button onClick={() => navigate('/register')} className="btn btn-primary mt-0">Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
