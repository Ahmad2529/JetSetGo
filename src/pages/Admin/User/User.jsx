import { useNavigate, useSearchParams } from 'react-router-dom';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

function AddUser() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    UserService.getUsers().then(us => {
      setUsers(us);
     })
  }

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
      getUsers();
    }).catch(err => {
      alert('Unable to Add user. Please try again!')
    });
  };

  const deleteUser = (id) => {
    UserService.delete(id).then(() => getUsers())
  }

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

        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                    {/* <th scope="col">Shares</th> */}
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, index) => {
                      return <tr key={user.email}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        {/* <td>1.234</td> */}
                        <td>
                          {/* <button type="button" className="btn btn-success me-2"><i className="fas fa-edit"></i></button> */}
                          <button onClick={() => deleteUser(user.docId)} type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;