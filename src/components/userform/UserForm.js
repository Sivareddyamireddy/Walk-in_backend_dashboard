// import React, { useState } from 'react';
// import './UserForm.css'; // Create and link a CSS file for styling

// const UserForm = () => {
//   const [user, setUser] = useState({ username: '', email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('User Data Submitted:', user);
//     setUser({ username: '', email: '', password: '' });
//   };

//   return (
//     <div className="user-form-container">
//       <form onSubmit={handleSubmit}>
//         <h3>User Details</h3>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={user.username}
//             onChange={handleChange}
//             placeholder="Enter your username"
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             required
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';
import { API_URL } from '../../data/apiPath';

const UserForm = () => {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('User Data Submitted:', user);
    setUser({ username: '', email: '', password: '' });
    navigate('/'); // Redirect to login form

    try {
        const response = await fetch(`${API_URL}/user/register`,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({username: user.username, email: user.email, password: user.password})
        })

        const data = await response.json();

        if(response.ok){
            console.log(data);
            alert("user registered successfully")
        }

    } catch (error) {
        console.error("registration failed", error);
        alert("registration failed")
        
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('User Data Submitted:', user);
  
  //   try {
  //     const response = await fetch(`${API_URL}/user/register`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(user)
  //     });
  
  //     let data;
  //     try {
  //       data = await response.json(); // Try to parse JSON response
  //     } catch (jsonError) {
  //       console.error("Invalid JSON response from server");
  //       alert("Registration failed: Invalid response from server.");
  //       return;
  //     }
  
  //     if (response.ok) {
  //       console.log(data);
  //       alert("User registered successfully");
  //       setUser({ username: '', email: '', password: '' });
  //       navigate('/login'); // Redirect to login form
  //     } else {
  //       // Check for duplicate email error
  //       if (data.error && data.error.includes("Email already exists")) {
  //         alert("The email is already used. Please try a different email.");
  //       } else {
  //         alert("Registration failed: " + (data.error || "Unknown error"));
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Registration failed", error);
  //     alert("Registration failed. Please try again.");
  //   }
  // };
  
  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit}>
        <h3>User Details</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
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
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </label>
        <button type="submit">Submit</button>
        <div className='loginbtn'>
          <p>Have an account? <button type="button" onClick={() => navigate('/')} className="signup-btn">Login</button></p>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
