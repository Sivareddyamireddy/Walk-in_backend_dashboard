import React from 'react'
import "./PageNotFound.css"
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='page'>
      <Link to="/"><p>go back</p></Link>
      <h1 id="pnf">Page Not Found</h1>
    </div>
  )
}

export default PageNotFound
