import { useNavigate } from 'react-router-dom';
import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import './style.css';

function Home() {
  const router = useNavigate();

  function navigate(url) {
    router(url);
  }

  return (
    <div className=''>
      <Navbar />
      <main>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-4">Find great deals on hotels</h1>
                <p className="lead">Book your next adventure with Booking.com</p>
                <div className="search-form">
                  <input type="text" className="form-control mb-3" placeholder="Destination" />
                  <div className="row">
                    <div className="col-md-6">
                      <input type="date" className="form-control" placeholder="Check-in" />
                    </div>
                    <div className="col-md-6">
                      <input type="date" className="form-control" placeholder="Check-out" />
                    </div>
                  </div>
                  <button onClick={() => navigate('/results')} className="btn btn-primary mt-3">Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
