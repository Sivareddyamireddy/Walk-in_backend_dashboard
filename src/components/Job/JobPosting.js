import React, { useState } from 'react';
import './JobPosting.css'; // Add your styles here
import { API_URL } from '../../data/apiPath';

const JobPosting = () => {
  const [jobDetails, setJobDetails] = useState({
    jobRole: '',
    eligibility: '',
    skillsRequired: '',
    hiringDate: '',
    experience: '',
    interviewLocation: '',
    noOfOpenings: '',
    shift: '',
    ctc: '',
  });

  const [formMessage, setFormMessage] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "jobRole",
      "eligibility",
      "skillsRequired",
      "hiringDate",
      "experience",
      "interviewLocation",
      "noOfOpenings",
      "shift",
      "ctc",
    ];
    for (const field of requiredFields) {
      if (!jobDetails[field]) {
        setFormMessage({ type: "error", message: "Please fill in all fields." });
        return;
      }
    }

    try {
      const loginToken = localStorage.getItem("loginToken");
      const companyId = localStorage.getItem("companyId");

      if (!loginToken || !companyId) {
        console.error("User not authenticated");
        setFormMessage({ type: "error", message: "Authentication failed." });
        return;
      }

      // Format skillsRequired as an array
      const formattedJobDetails = {
        ...jobDetails,
        skillsRequired: jobDetails.skillsRequired.split(",").map(skill => skill.trim()),
      };

      const response = await fetch(`${API_URL}/jobposting/add-jobpost/${companyId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: loginToken,
        },
        body: JSON.stringify(formattedJobDetails),
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage({ type: "success", message: "Job details added successfully!" });
        setJobDetails({
          jobRole: "",
          eligibility: "",
          skillsRequired: "",
          hiringDate: "",
          experience: "",
          interviewLocation: "",
          noOfOpenings: "",
          shift: "",
          ctc: "",
        });
      } else {
        setFormMessage({ type: "error", message: data.error || "Failed to add job details." });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage({ type: "error", message: "Submission failed. Please try again." });
    }
  };

  return (
    <div className="job-posting-container">
      <form onSubmit={handleSubmit}>
        <h3>Job Posting</h3>
        <label>
          Job Role:
          <input
            type="text"
            name="jobRole"
            value={jobDetails.jobRole}
            onChange={handleChange}
            placeholder="Enter job role"
            required
          />
        </label>
        <label>
          Eligibility:
          <textarea
            name="eligibility"
            value={jobDetails.eligibility}
            onChange={handleChange}
            placeholder="Enter eligibility criteria"
            required
          />
        </label>
        <label>
          Skills Required:
          <textarea
            name="skillsRequired"
            value={jobDetails.skillsRequired}
            onChange={handleChange}
            placeholder="Enter skills required (comma separated)"
            required
          />
        </label>
        <label>
          Hiring Date:
          <input
            type="date"
            name="hiringDate"
            value={jobDetails.hiringDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Experience (in years):
          <input
            type="number"
            name="experience"
            value={jobDetails.experience}
            onChange={handleChange}
            placeholder="Enter experience"
            required
          />
        </label>
        <label>
          Interview Location:
          <input
            type="text"
            name="interviewLocation"
            value={jobDetails.interviewLocation}
            onChange={handleChange}
            placeholder="Enter interview location"
            required
          />
        </label>
        <label>
          Number of Openings:
          <input
            type="number"
            name="noOfOpenings"
            value={jobDetails.noOfOpenings}
            onChange={handleChange}
            placeholder="Enter number of openings"
            required
          />
        </label>
        <label>
          Shift:
          <input
            type="text"
            name="shift"
            value={jobDetails.shift}
            onChange={handleChange}
            placeholder="Enter shift (e.g., Day/Night)"
            required
          />
        </label>
        <label>
          CTC (per annum):
          <input
            type="text"
            name="ctc"
            value={jobDetails.ctc}
            onChange={handleChange}
            placeholder="Enter CTC (e.g., 5 LPA)"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {formMessage.message && (
        <p className={`form-message ${formMessage.type}`}>{formMessage.message}</p>
      )}
    </div>
  );
};

export default JobPosting;
