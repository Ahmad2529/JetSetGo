import { useNavigate, useSearchParams } from 'react-router-dom';

import React from 'react';
import { useForm } from 'react-hook-form';

function AddHotel() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  React.useEffect(() => {
   
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
    
  };


  return (
    <div>
      <div className="container booking-hld">        
        <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className='form-control' id="name" name="name" placeholder="Enter your name" {...register("name", validationRules.name)} required />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          
          
          <input type="submit" value="Add Hotel" />
        </form>
      </div>
    </div>
  );
}

export default AddHotel;