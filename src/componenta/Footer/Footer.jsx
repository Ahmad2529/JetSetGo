import './style.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Jetsetgo.com. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            {/* <ul className="list-inline text-md-right">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of Service</a></li>
              <li className="list-inline-item"><a href="#">Contact</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
