import { useNavigate, useSearchParams } from 'react-router-dom';

import React from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../../../services/auth.service';

function AddUser() {
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
    
    AuthService.signup(data).then(() => {
      alert('User Added successful');
    }).catch(err => {
      alert('Unable to Add user. Please try again!')
    });
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
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" className='form-control' id="email" name="email" placeholder="Enter your email" {...register("email", validationRules.email)} required />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="num">password:</label>
            <input type="password" className='form-control' min={8} id="num" name="num" placeholder="Enter your password" {...register("password", validationRules.name)} required />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          
          <input type="submit" value="Add User" />
        </form>
      </div>
    </div>
  );
}

export default AddUser;