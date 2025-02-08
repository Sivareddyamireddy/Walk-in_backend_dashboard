// import React, { useState } from 'react';
// import './CompanyForm.css'; // Link a CSS file for styling

// const CompanyForm = () => {
//   const [company, setCompany] = useState({
//     companyName: '',
//     location: '',
//     category: '',
//     description: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCompany({ ...company, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setCompany({ ...company, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Company Data Submitted:', company);

//     // Clear the form after submission
//     setCompany({ companyName: '', location: '', category: '', description: '', image: null });
//   };

//   return (
//     <div className="company-form-container">
//       <form onSubmit={handleSubmit}>
//         <h3>Company Details</h3>
//         <label>
//           Company Name:
//           <input
//             type="text"
//             name="companyName"
//             value={company.companyName}
//             onChange={handleChange}
//             placeholder="Enter company name"
//             required
//           />
//         </label>
//         <label>
//           Location:
//           <input
//             type="text"
//             name="location"
//             value={company.location}
//             onChange={handleChange}
//             placeholder="Enter location"
//             required
//           />
//         </label>
//         <label>
//           Category:
//           <input
//             type="text"
//             name="category"
//             value={company.category}
//             onChange={handleChange}
//             placeholder="Enter category"
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={company.description}
//             onChange={handleChange}
//             placeholder="Enter description"
//             required
//           />
//         </label>
//         <label>
//           Upload Image:
//           <input type="file" onChange={handleFileChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CompanyForm;


// 2
// import React, { useState } from 'react';
// import './CompanyForm.css'; // Ensure this file contains your styles

// const CompanyForm = () => {
//   const [company, setCompany] = useState({
//     companyName: '',
//     location: '',
//     category: '',
//     description: '',
//     image: null,
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [formMessage, setFormMessage] = useState({ type: '', message: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCompany({ ...company, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setCompany({ ...company, image: file });

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setImagePreview(reader.result);
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview(null);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (
//       !company.companyName ||
//       !company.location ||
//       !company.category ||
//       !company.description
//     ) {
//       setFormMessage({ type: 'error', message: 'Please fill in all fields.' });
//       return;
//     }

//     console.log('Company Data Submitted:', company);

//     // Example API submission
//     // Replace this with your API endpoint
//     // fetch('/api/company', {
//     //   method: 'POST',
//     //   body: JSON.stringify(company),
//     //   headers: { 'Content-Type': 'application/json' },
//     // })
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     setFormMessage({ type: 'success', message: 'Company added successfully!' });
//     //     console.log(data);
//     //   })
//     //   .catch((err) => {
//     //     setFormMessage({ type: 'error', message: 'Submission failed!' });
//     //     console.error(err);
//     //   });

//     // Clear the form and reset states
//     setFormMessage({ type: 'success', message: 'Company added successfully!' });
//     setCompany({ companyName: '', location: '', category: '', description: '', image: null });
//     setImagePreview(null);
//   };

//   return (
//     <div className="company-form-container">
//       <form onSubmit={handleSubmit}>
//         <h3>Company Details</h3>
//         <label>
//           Company Name:
//           <input
//             type="text"
//             name="companyName"
//             value={company.companyName}
//             onChange={handleChange}
//             placeholder="Enter company name"
//             required
//           />
//         </label>
//         <label>
//           Location:
//           <input
//             type="text"
//             name="location"
//             value={company.location}
//             onChange={handleChange}
//             placeholder="Enter location"
//             required
//           />
//         </label>
//         <label>
//           Category:
//           <input
//             type="text"
//             name="category"
//             value={company.category}
//             onChange={handleChange}
//             placeholder="Enter category"
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={company.description}
//             onChange={handleChange}
//             placeholder="Enter description"
//             required
//           />
//         </label>
//         <label>
//           Upload Image:
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//         </label>
//         {imagePreview && (
//           <div className="image-preview">
//             <h4>Image Preview:</h4>
//             <img src={imagePreview} alt="Preview" />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//       {formMessage.message && (
//         <p className={`form-message ${formMessage.type}`}>{formMessage.message}</p>
//       )}
//     </div>
//   );
// };

// export default CompanyForm;


import React, { useState } from 'react';
import './CompanyForm.css'; // Ensure this file contains your styles
import { API_URL } from '../../data/apiPath';


const CompanyForm = () => {
  const [company, setCompany] = useState({
    companyName: '',
    location: '',
    category: '',
    description: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [formMessage, setFormMessage] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCompany({ ...company, image: file });

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //       const loginToken = localStorage.getItem('loginToken');
  //       if(!loginToken){
  //           console.log("User not authenticated");

  //       }
  //       const response = await fetch(`${API_URL}/company/add-company`,{
  //       method:'POST',
  //       headers:{
  //       'token' : `${loginToken}`
  //       },
  //       body: JSON.stringify({email: credentials.email, password: credentials.password})
  //       })
            
  //       const data = await response.json();
            
  //       if(response.ok){
  //       console.log(data);
  //       alert("company added successfully");
  //       }
  //   } catch (error) {
  //       console.error("failed to add company");
  //   }

  //   // Validation
  //   if (
  //     !company.companyName ||
  //     !company.location ||
  //     !company.category ||
  //     !company.description
  //   ) {
  //     setFormMessage({ type: 'error', message: 'Please fill in all fields.' });
  //     return;
  //   }

  //   console.log('Company Data Submitted:', company);

  //   try {
  //     // Simulate API call
  //     // Replace this URL with your actual endpoint
  //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay

  //     setFormMessage({ type: 'success', message: 'Company added successfully!' });

  //     // Reset form
  //     setCompany({ companyName: '', location: '', category: '', description: '', image: null });
  //     setImagePreview(null);
  //   } catch (error) {
  //     setFormMessage({ type: 'error', message: 'Submission failed. Please try again.' });
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Check if the user is authenticated
  //   const loginToken = localStorage.getItem('loginToken');
  //   if (!loginToken) {
  //     console.log("User not authenticated");
  //     alert("You need to log in first.");
  //     return;
  //   }
  
  //   // Validation: Ensure all fields are filled
  //   if (!company.companyName || !company.location || !company.category || !company.description || !company.image) {
  //     setFormMessage({ type: 'error', message: 'Please fill in all fields and upload an image.' });
  //     return;
  //   }
  
  //   console.log('Company Data Submitted:', company);
  
  //   try {
  //     // Create a FormData object to send the image file
  //     const formData = new FormData();
  //     formData.append("companyName", company.companyName);
  //     formData.append("location", company.location);
  //     formData.append("category", company.category);
  //     formData.append("description", company.description);
  //     formData.append("image", company.image); // Attach the image file
  
  //     // Send data to backend
  //     const response = await fetch(`${API_URL}/company/add-company`, {
  //       method: 'POST',
  //       headers: {
  //         'token': loginToken // Token is sent in the headers
  //       },
  //       body: formData // FormData should be used instead of JSON.stringify
  //     });
  
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       console.log(data);
  //       alert("Company added successfully!");
  //       setFormMessage({ type: 'success', message: 'Company added successfully!' });
  
  //       // Reset form
  //       setCompany({ companyName: '', location: '', category: '', description: '', image: null });
  //       setImagePreview(null);
  //     } else {
  //       setFormMessage({ type: 'error', message: data.error || 'Failed to add company.' });
  //     }
  
  //   } catch (error) {
  //     console.error("Failed to add company:", error);
  //     setFormMessage({ type: 'error', message: 'Submission failed. Please try again.' });
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginToken = localStorage.getItem('loginToken');
    if (!loginToken) {
      alert("You need to log in first.");
      return;
    }
  
    if (!company.companyName || !company.location || !company.category || !company.description || !company.image) {
      setFormMessage({ type: 'error', message: 'Please fill in all fields and upload an image.' });
      return;
    }
  
    console.log("Submitting Company Data:", company);
  
    try {
      const formData = new FormData();
      formData.append("companyName", company.companyName);
      formData.append("location", company.location);
      formData.append("category", company.category);
      formData.append("description", company.description);
      formData.append("image", company.image);
  
      // Debug: Log FormData contents
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      const response = await fetch(`${API_URL}/company/add-company`, {
        method: 'POST',
        headers: { 'token': loginToken }, // No 'Content-Type'
        body: formData
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Company added successfully!");
        setFormMessage({ type: 'success', message: 'Company added successfully!' });
        setCompany({
          companyName: '',
          location: '',
          category: '',
          description: '',
          image: null,
        });
        setImagePreview(null);
      } else if (data.message === "user can have only one company") {
        alert("Company exists. Only 1 company can be added.");
        setFormMessage({ type: 'error', message: "user can have only one company" });
      } else {
        setFormMessage({ type: 'error', message: data.error || 'Failed to add company.' });
      }
      
      console.log("this is company id",data.companyId);
      
      const companyId = data.companyId;

      localStorage.setItem('companyId', companyId)

    } catch (error) {
      console.error("Failed to add company:", error);
      setFormMessage({ type: 'error', message: 'Submission failed. Please try again.' });
    }
  };
  

  return (
    <div className="company-form-container">
      <form onSubmit={handleSubmit}>
        <h3>Company Details</h3>
        <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={company.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />

        <label> Location:</label>
          <input
            type="text"
            name="location"
            value={company.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={company.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={company.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
          />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
        {imagePreview && (
          <div className="image-preview">
            <h4>Image Preview:</h4>
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {formMessage.message && (
        <p className={`form-message ${formMessage.type}`}>{formMessage.message}</p>
      )}
    </div>
  );
};

export default CompanyForm;
