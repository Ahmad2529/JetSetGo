import { useNavigate, useSearchParams } from 'react-router-dom';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { BookingsService } from '../../../services/booking';

function ViewBooking() {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    getBookings()
  }, [])

  const getBookings = () => {
    BookingsService.get().then(us => {
      console.log(us)
      setUsers(us);
     })
  }

  const deleteBooking = (id) => {
    BookingsService.delete(id).then(res => {
      if (res) getBookings();
    }).catch(e => alert('Failed to delete booking'))
  }

  return (
    <div>
      <div className="container booking-hld">        
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Email</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rooms</th>
                    <th scope="col">Room Type</th>
                    {/* <th scope="col">Shares</th> */}
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, index) => {
                      return <tr key={user.docId}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.email}</td>
                        <td>{user.from}</td>
                        <td>{user.to}</td>
                        <td>{user.price}</td>
                        <td>{user.roomCount}</td>
                        <td>{user.roomType.split('_').join(' ')}</td>
                        {/* <td>1.234</td> */}
                        <td>
                          <button onClick={() => deleteBooking(user.docId)} type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
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

export default ViewBooking;