import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import './style.css';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import { useForm } from 'react-hook-form';

function Booking() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validationRules = {
    name: { required: "Name is required" },
    email: { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } },
    destination: { required: "Destination is required" },
    from: { required: "From date is required" },
    to: { required: "To date is required" },
    passengers: { required: "Number of passengers is required", pattern: { value: /^[1-9]\d*$/, message: "Invalid number of passengers" } }
  };

  const onSubmit = (data) => {
    console.log(data);
    
    // navigate('/overview')
  };

  return (
    <div>
      <Navbar />
      <div className="container booking-hld">        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" {...register("name", validationRules.name)} required />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" {...register("email", validationRules.email)} required />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <select id="destination" name="destination" {...register("destination", validationRules.destination)} required>
              <option value="">Select a destination</option>
              <option value="paris">Paris</option>
              <option value="london">London</option>
              <option value="new-york">New York</option>
              <option value="tokyo">Tokyo</option>
            </select>
            {errors.destination && <p className="error">{errors.destination.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Enter check-in date:</label>
            <input type="date" id="from" name="from" placeholder="Enter from date" {...register("from", validationRules.date)} required />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Enter check-out date:</label>
            <input type="date" id="to" name="to" placeholder="Enter to date" {...register("to", validationRules.date)} required />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="passengers">Number of Passengers:</label>
            <input type="text" id="passengers" name="passengers" placeholder="Enter number of passengers" {...register("passengers", validationRules.passengers)} required />
            {errors.passengers && <p className="error">{errors.passengers.message}</p>}
          </div>
          
          <input type="submit" value="Book Now" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;