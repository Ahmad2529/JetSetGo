import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import './style.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

import React from 'react';
import { useForm } from 'react-hook-form';
import { HotelService } from '../../services/hotel';
import { BookingsService } from '../../services/booking';

const ROOM_TYPES = [
  { id: 'DELUXE_ROOM', label: 'Deluxe' },
  { id: 'PREMIUM_ROOM', label: 'Premium' },
  { id: 'STANDARD_ROOM', label: 'Standard' },
]

function Booking() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [params] = useSearchParams();
  const [hotel, setHotel] = React.useState();
  const [selectedType, setSelectedType] = React.useState(ROOM_TYPES[0].id);
  const [roomNo, setRoomNo] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const userDet = localStorage.getItem('user');
    if (!userDet) {
      alert("Please login first to proceed for booking!")
      navigate('/login')
      return;
    }

    setUser(JSON.parse(userDet));

    const id = params.get('id');

    HotelService.get().then(res => {
      console.log(res)
      const hot = res.find(x => x.docId == id);
      console.log(hot);
      setHotel(hot);
      register('roomNo', {value: 1})
    })
  }, [])

  const validationRules = {
    name: { required: "Name is required" },
    email: { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } },
    destination: { required: "Destination is required" },
    from: { required: "From date is required" },
    to: { required: "To date is required" },
    passengers: { required: "Number of passengers is required", pattern: { value: /^[1-9]\d*$/, message: "Invalid number of passengers" } }
  };

  const onSubmit = async (data) => {
    console.log(data);
    
    try {
      BookingsService.add({
        hotelId: hotel.docId,
        from: data.from,
        to: data.to,
        people: data.passengers,
        email: data.email,
        phone: data.phone,
        roomType: selectedType,
        roomCount: data.roomNo,
        price: price,
        userId: user.uid
      })

      alert('Booking created successfully. Enjoy your stay')
      navigate('/')
    } catch (e) {
      alert('Error while creating booking.')
    }
  };

  const onTypeSelection = (e) => {
    const val = e.target.value
    setSelectedType(val);

    let no = 0;
    let unitPrice = 0;
    if (hotel.deluxeRooms.id == val) {
      no = (hotel.deluxeRooms.total)
      unitPrice = hotel.deluxeRooms.unitPrice;
    } else if (hotel.premiumRooms.id == val) {
      no = (hotel.premiumRooms.total)
      unitPrice = hotel.premiumRooms.unitPrice;
    } else if (hotel.standardRooms.id == val) {
      no = (hotel.standardRooms.total)
      unitPrice = hotel.standardRooms.unitPrice;
    }

    let arr = [];
    for(let i = 1; i <= no; i++) {
      arr.push(i);
    }
    setRoomNo(arr);
    setPrice(unitPrice);
  }

  if (!hotel) return;

  return (
    <div>
      <Navbar />
      <div className="container booking-hld">        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className='form-control' id="name" name="name" placeholder="Enter your name" {...register("name", validationRules.name)} required />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" className='form-control' id="email" name="email" placeholder="Enter your email" {...register("email", validationRules.email)} required />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="num">Phone:</label>
            <input type="number" className='form-control' id="num" name="num" placeholder="Enter your phone" {...register("phone", validationRules.passengers)} required />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Enter check-in date:</label>
            <input type="date" className='form-control' id="from" name="from" placeholder="Enter from date" {...register("from", validationRules.date)} required />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Enter check-out date:</label>
            <input type="date" className='form-control' id="to" name="to" placeholder="Enter to date" {...register("to", validationRules.date)} required />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="destination">Room Type:</label>
            <select id="destination" className='form-control' name="destination" onChange={onTypeSelection} required>
              {
                ROOM_TYPES.map(type => {
                  return <option key={type.id} value={type.id}>{type.label}</option>
                })
              }
            </select>
            {/* {errors.destination && <p className="error">{errors.destination.message}</p>} */}
          </div>

          <div className="form-group">
            <label htmlFor="destination">Rooms:</label>
            <select id="destination" className='form-control' name="destination" {...register("roomNo", validationRules.destination)} required>
              {
                roomNo.map(x => <option key={x} value={x}>{x}</option>)
              }
            </select>
            {/* {errors.destination && <p className="error">{errors.destination.message}</p>} */}
          </div>
          
          <div className="form-group">
            <label htmlFor="passengers">Number of Guest:</label>
            <input type="number" className='form-control' id="passengers" name="passengers" placeholder="Enter number of guests" {...register("passengers", validationRules.passengers)} required />
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