import React, { useState } from 'react';
import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import AddUser from './User/User';
import './style.css';
import AddHotel from './Hotel/AddHotel';
import ViewBooking from './Booking';
import { useNavigate } from 'react-router-dom';

const TABS = [
  'User',
  'Hotel',
  'Booking'
]

function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('User')
  const [isAuth, setIsAuth] = useState(false);

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Authentication is required');
      navigate('/login');
      return;
    }

    const adminUser = JSON.parse(user);
    if (!adminUser.admin) {
      alert('Admin authentication is required');
      navigate('/login');
      return;
    }

    setIsAuth(true);
  }, [])

  if (!isAuth) return;

  return (
    <div>
      <Navbar />

  <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">Admin Panel</span>
    </div>
      <ul className="nav-links">
        {
          TABS.map(x => (
            <li key={x}>
            <a onClick={() => setActiveTab(x)} className={activeTab == x ? "active" : ""}>
              <i className='bx bx-grid-alt' ></i>
              <span className="links_name">{x}</span>
            </a>
          </li>
          ))
        }
      </ul>
  </div>
  <section className="home-section">
    <div className="home-content">
      {
        activeTab == 'User' && <AddUser />
      }
      {
        activeTab == 'Hotel' && <AddHotel />
      }
      {
        activeTab == 'Booking' && <ViewBooking />
      }
    </div>
  </section>

      <Footer />
    </div>
  );
}

export default Admin;
