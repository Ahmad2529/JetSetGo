import React from 'react';
import Footer from '../../componenta/Footer/Footer';
import Navbar from '../../componenta/Navbar/Navbar';
import AddUser from './User/User';
import './style.css';
import AddHotel from './Hotel/AddHotel';

const TABS = [
  'User',
  'Hotel'
]

function Admin() {
  const [activeTab, setActiveTab] = React.useState()

  return (
    <div>
      <Navbar />

  <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">CodingLab</span>
    </div>
      <ul className="nav-links">
        {
          TABS.map(x => (
            <li key={x}>
            <a onClick={() => setActiveTab(x)} className="active">
              <i className='bx bx-grid-alt' ></i>
              <span className="links_name">{x}</span>
            </a>
          </li>
          ))
        }
      </ul>
  </div>
  <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Add User</span>
      </div>
      <div className="search-box">
        {/* <input type="text" placeholder="Search..." />
        <i className='bx bx-search' ></i> */}
      </div>
      <div className="profile-details">
        {/* <img src="images/profile.jpg" alt="" />
        <span className="admin_name">Prem Shahi</span>
        <i className='bx bx-chevron-down' ></i> */}
      </div>
    </nav>

    <div className="home-content">
      {
        activeTab == 'User' && <AddUser />
      }
            {
        activeTab == 'Hotel' && <AddHotel />
      }
    </div>
  </section>

      <Footer />
    </div>
  );
}

export default Admin;
