// import React, {useState, useEffect, use} from 'react'
// import { API_URL } from '../../data/apiPath';

// const AllJobs = () => {
// const[jobs, setJobs]=useState([]);

// const jobsHandler = async()=>{
//         const companyId = localStorage.getItem('companyId');
//     try {
//             const response = await fetch(`${API_URL}/jobposting/${companyId}/jobpostings`);
//             const newJobsData = await response.json();
//             setJobs(newJobsData);
//             console.log(newJobsData);
//     } catch (error) {
//         console.error("failed to fetch jobs", error);
//         alert('failed to fetch products')
        
//     }
    
// }

// useEffect(()=>{
//     jobsHandler()
//     console.log('this is useEffect');
// },[])


//   return (
//     <div>
//         {jobs.length === 0 ? (
//             <p>No Jobs Added</p>
//         ): (

//         )}
//     </div>
//   )
// }

// export default AllJobs

import React, { useState, useEffect } from "react";
import { API_URL } from "../../data/apiPath";
import './AllJobs.css'; // ✅ Import the CSS file

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch job postings
  const jobsHandler = async () => {
    const companyId = localStorage.getItem("companyId");
    try {
      const response = await fetch(`${API_URL}/jobposting/${companyId}/jobpostings`);
      const data = await response.json();
      setJobs(data.jobpostings);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch jobs", error);
      alert("Failed to fetch jobs");
    }
  };

  useEffect(() => {
    jobsHandler();
  }, []);

  // Delete job posting by ID
  const deleteJobById = async (jobPostingId) => {
    try {
      const response = await fetch(`${API_URL}/jobposting/delete-jobpost/${jobPostingId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the jobs state immediately after successful deletion
        setJobs(jobs.filter(job => job._id !== jobPostingId));
        //confirm("are you sure, you want to delete?")
        alert("Job posting deleted successfully");
      } 
    } catch (error) {
      console.error("Failed to delete Job posting", error);
      alert("Failed to delete job posting");
    }
  };

  // return (
  //   <div className="table-container">
  //     {jobs.length === 0 ? (
  //       <p>No Jobs Added</p>
  //     ) : (
  //       <table className="job-table">
  //         <thead>
  //           <tr>
  //             <th>Job Role</th>
  //             <th>Eligibility</th>
  //             <th>Skills Required</th>
  //             <th>Hiring Date</th>
  //             <th>Experience</th>
  //             <th>Interview Location</th>
  //             <th>No. of Openings</th>
  //             <th>Shift</th>
  //             <th>CTC</th>
  //             <th>Action</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {jobs.map((item) => (
  //             <tr key={item._id}>
  //               <td>{item.jobRole}</td>
  //               <td>{item.eligibility}</td>
  //               <td>{item.skillsRequired}</td>
  //               <td>{item.hiringDate}</td>
  //               <td>{item.experience}</td>
  //               <td>{item.interviewLocation}</td>
  //               <td>{item.noOfOpenings}</td>
  //               <td>{item.shift}</td>
  //               <td>{item.ctc}</td>
  //               <td>
  //                 <button onClick={() => deleteJobById(item._id)}>Delete</button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     )}
  //   </div>
  // );
  return (
    <div className="table-container">
      {Array.isArray(jobs) && jobs.length > 0 ? (
        <table className="job-table">
          <thead>
            <tr>
              <th>Job Role</th>
              <th>Eligibility</th>
              <th>Skills Required</th>
              <th>Hiring Date</th>
              <th>Experience</th>
              <th>Interview Location</th>
              <th>No. of Openings</th>
              <th>Shift</th>
              <th>CTC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((item) => (
              <tr key={item._id}>
                <td>{item.jobRole}</td>
                <td>{item.eligibility}</td>
                <td>{item.skillsRequired}</td>
                <td>{item.hiringDate}</td>
                <td>{item.experience}</td>
                <td>{item.interviewLocation}</td>
                <td>{item.noOfOpenings}</td>
                <td>{item.shift}</td>
                <td>{item.ctc}</td>
                <td>
                  <button onClick={() => deleteJobById(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Jobs Added</p>
      )}
    </div>
  );
  

};

export default AllJobs;


