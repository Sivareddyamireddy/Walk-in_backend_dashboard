import React from 'react';
import { Link } from 'react-router-dom';
import './VendorNavbar.css';

const VendorNavbar = (props) => {


  return (
    <div className="vendor-navbar-page">
      {/* Navigation Bar */}
      <nav className="vendor-navbar">
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/CompanyForm">Add Company</Link></li>
          <li><Link to="/jobPosting">Add JobPosting Details</Link></li>
          <li><Link to="/allJobs">All Jobs</Link></li>
          <li><Link to="/"><button onClick={()=>{props.logout(false)}}>Logout</button></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default VendorNavbar;




