import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { API_URL } from '../../data/apiPath';

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login Credentials Submitted:', credentials);

    try {
            const response = await fetch(`${API_URL}/user/login`,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
            })
    
            const data = await response.json();
    
            if(response.ok){
                //console.log(data);
                alert("login successfully");
                localStorage.setItem('loginToken', data.token)
            }

            const userId = data.userId
            console.log("checking for UserId:" ,userId)
            
            const userResponse = await fetch(`${API_URL}/user/single-user/${userId}`)
            const userData = await userResponse.json();
            if(userResponse.ok){
              const userCompanyId = userData.userCompanyId;
              console.log("checking for companyId", userCompanyId);
              localStorage.setItem('companyId', userCompanyId)

            }
        } catch (error) {
            console.error(error);
            alert("registration failed")
            
        }
        props.login(true);

    // Add any login validation here if needed

    // Redirect to Vendor Navbar Page
    navigate('/');
  };
 
  
  
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </label>
        <button type="submit">Login</button>
        <div className='signupbtn'>
          <p>Don't have an account? <button type="button" onClick={() => navigate('/register')} className="signup-btn">Sign Up</button></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
