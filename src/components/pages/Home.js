import React from 'react'

function Home() {
  return (
    <div>
       {/* Full-Screen Image Section */}
       <div className="vendor-welcome-section">
        <div className="welcome-text">
          {/* <h1>Welcome to Vendor Dashboard</h1> */}
        </div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgetLIJ1sLIfH___ykq-03_t0WKlpkvZEopw&s.jpg" 
          alt="Vendor Dashboard Background" 
          className="full-screen-image" 
        />
      </div>

      {/* Additional Content Below the Image */}
      <div className="vendor-content">
        {/* <h2>About the Vendor Dashboard</h2> */}
        <p>
             Manage your company details, post jobs, and track your activities with ease. 
            Our platform provides a seamless experience for managing all your recruitment needs.
          </p>
         <p>
           Navigate through the menu to update company information, post job vacancies, 
            and view relevant details to enhance your workflow.
          </p>
      </div>
    </div>
  )
}

export default Home
