import { useNavigate, useSearchParams } from 'react-router-dom';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HotelService } from '../../../services/hotel';
import Card from '../../../componenta/Card/Card';

const ROOM_COUNT = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

const RATING = [
  1, 2, 3, 4, 5
]

function AddHotel() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isAddUser, setIsAddUser] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [editId, setEditId] = useState();

  React.useEffect(() => {
    getHotels();
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

    const hotelObj = {
        amenities: data.amenities.split(','),
        category: "luxury",
        deluxeRooms: {unitPrice: data.deluxeRoomPrice, total: +data.deluxeRoomTotal, id: 'DELUXE_ROOM'},
        description: data.description,
        image: data.image,
        location: data.location,
        moreImage: [],
        name: data.name,
        premiumRooms: {unitPrice: data.premiumRoomPrice, id: 'PREMIUM_ROOM', total: +data.premiumRoomTotal},
        rating: data.rating,
        standardRooms: {total: +data.standardRoomTotal, unitPrice: data.standardRoomPrice, id: 'STANDARD_ROOM'},
        type: "LUXURY"
    }
    if (editId) {
      hotelObj.docId = editId;
      HotelService.update(hotelObj).then(() => {
        getHotels();
        setEditId(undefined);
      })
    } else {
      HotelService.add(hotelObj).then(() => {
        getHotels();
        setIsAddUser(false);
      })
    }
    
  };

  const getHotels = () => {
    HotelService.get().then(res => {
      console.log(res);
      setHotel(res);
    })
  }

  const edit = (hotel) => {
    setEditId(hotel.docId);
    register('name', {value: hotel.name})
    register('location', {value: hotel.location})
    register('image', {value: hotel.image})
    register('amenities', {value: hotel.amenities.join(',')})
    register('rating', {value: hotel.rating})
    register('standardRoomPrice', {value: hotel.standardRooms.unitPrice})
    register('standardRoomTotal', {value: hotel.standardRooms.total})
    register('premiumRoomPrice', {value: hotel.premiumRooms.unitPrice})
    register('premiumRoomTotal', {value: hotel.premiumRooms.total})
    register('deluxeRoomPrice', {value: hotel.deluxeRooms.unitPrice})
    register('deluxeRoomTotal', {value: hotel.deluxeRooms.total})
    register('description', {value: hotel.description})
  }

  const deleteHotel = (id) => {
    HotelService.delete(id).then(() => getHotels());
  }

  return (
    <div>
      <div className="container booking-hld">
        {
          !isAddUser && !editId && (
            <div>
              <button
                className='btn btn-primary container mb-3'
                onClick={() => {
                  setIsAddUser(true);
                  setEditId(undefined)
                }}
              >
                Add Hotel
              </button>
              <div className="">
                {
                  hotel.map((user, index) => {
                    return <Card key={user.docId} info={user} isAdmin={true} onEdit={() => edit(user)} onDelete={deleteHotel}/>
                  })
                }
              </div>
            </div>
          )
        }
        {
          (isAddUser || editId) && (
            <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className='form-control' id="name" name="name" placeholder="Enter your name" {...register("name", validationRules.name)} required />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input type="text" className='form-control' id="location" name="location" placeholder="Enter your location" {...register("location", validationRules.name)} required />
                {errors.location && <p className="error">{errors.location.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="image">Image (URL):</label>
                <input type="text" className='form-control' id="image" name="image" placeholder="Enter image url" {...register("image", validationRules.name)} required />
                {errors.image && <p className="error">{errors.image.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="image">Amenities (comma separated e.g pool, bar, bathtub):</label>
                <input type="text" className='form-control' id="amenities" name="amenities" placeholder="Enter amenities" {...register("amenities", validationRules.name)} required />
                {errors.amenities && <p className="error">{errors.amenities.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="image">Rating:</label>
                <input type='number' id="rating" className='form-control' name="rating" {...register("rating", validationRules.name)} required />
              </div>
              <div className="form-group">
                <label htmlFor="image">Deluxe Room:</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input type="number" className='form-control' id="deluxeRoomPrice" name="deluxeRoomPrice" placeholder="Enter price per night" {...register("deluxeRoomPrice", validationRules.passengers)} required />
                </div>
                <select id="deluxeRoomTotal" className='form-control' name="deluxeRoomTotal" {...register("deluxeRoomTotal", validationRules.destination)} required>
                  {
                    ROOM_COUNT.map(x => <option key={x} value={x}>{x}</option>)
                  }
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="image">Premium Room:</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input type="number" className='form-control' id="premiumRoomPrice" name="premiumRoomPrice" placeholder="Enter price per night" {...register("premiumRoomPrice", validationRules.passengers)} required />
                </div>
                <select id="premiumRoomTotal" className='form-control' name="premiumRoomTotal" {...register("premiumRoomTotal", validationRules.destination)} required>
                  {
                    ROOM_COUNT.map(x => <option key={x} value={x}>{x}</option>)
                  }
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="image">Standard Room:</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input type="number" className='form-control' id="standardRoomPrice" name="standardRoomPrice" placeholder="Enter price per night" {...register("standardRoomPrice", validationRules.passengers)} required />
                </div>
                <select id="standardRoomTotal" className='form-control' name="standardRoomTotal" {...register("standardRoomTotal", validationRules.destination)} required>
                  {
                    ROOM_COUNT.map(x => <option key={x} value={x}>{x}</option>)
                  }
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location">Description:</label>
                <textarea type="text" className='form-control' id="description" name="description" placeholder="Enter your description" {...register("description", validationRules.name)} required />
                {errors.description && <p className="error">{errors.description.message}</p>}
              </div>
              {/* <input type="submit" value="Add Hotel" /> */}
              <button
                type='submit'
                className='btn btn-success me-2'
              >
                {editId ? 'Save' : 'Add Hotel'}
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => {
                  setIsAddUser(false);
                  setEditId(undefined);
                }}
              >
                Cancel
              </button>
            </form>
          )
        }   
      </div>
    </div>
  );
}

export default AddHotel;