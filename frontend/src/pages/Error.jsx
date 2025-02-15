import React from 'react'
import {Link} from 'react-router-dom'
import {NotFound} from './index.jsx'
import '../styles/Error.css'
function Error() {
  return (
    <div className='error-container'>
      <div className="err-img">
        <img src={NotFound} alt='Not Found' />
      </div>
      <div className='err-message'>
        <h2>OHH! Page Not Found</h2>
        <p>We can't seem to find the page you are looking for</p>
        <Link to='/' >Back Home</Link>
      </div>
    </div>
  )
}

export default Error