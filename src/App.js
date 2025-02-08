import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/userform/UserForm';
import LoginForm from './components/Loginform/LoginForm';
import CompanyForm from './components/company/CompanyForm';
import VendorNavbar from './components/vendor/VendorNavbar';
import JobPosting from './components/Job/JobPosting';
import AllJobs from './components/alljobs/AllJobs';
import Home from './components/pages/Home';
import { useState } from 'react';
import PageNotFound from './components/pagenotfound/PageNotFound';

const App = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false)

  return (
    <Router>
      {isLoggedin ? <VendorNavbar logout = {setIsLoggedIn}/> : null }
      {/* Place Navbar outside Routes so it's always visible */}
      <Routes>
        <Route path ="/" element={isLoggedin? <Home/> : <LoginForm login = {setIsLoggedIn}/>}/>
        <Route path="/register" element={<UserForm />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        <Route path="/companyForm" element={<CompanyForm />} />
        <Route path="/jobposting" element={<JobPosting />} />
        <Route path="/alljobs" element={<AllJobs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
