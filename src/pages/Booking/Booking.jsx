import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import './style.css';

function Booking() {
  return (
    <div>
      <Navbar />
      <div className="booking-hld">     
        <div className='py-2'></div>   
        <form className='form-container'>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label for="destination">Destination:</label>
            <select id="destination" name="destination" required>
              <option value="">Select a destination</option>
              <option value="paris">Paris</option>
              <option value="london">London</option>
              <option value="new-york">New York</option>
              <option value="tokyo">Tokyo</option>
            </select>
          </div>
          
          <div className="form-group">
            <label for="date">Travel Date:</label>
            <input type="date" id="date" name="date" placeholder="Enter travel date" required />
          </div>
          
          <div className="form-group">
            <label for="passengers">Number of Passengers:</label>
            <input type="text" id="passengers" name="passengers" placeholder="Enter number of passengers" required />
          </div>
          
          <input type="submit" value="Book Now" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
