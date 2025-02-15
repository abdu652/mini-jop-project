import React from 'react'
import  '../styles/Landing.css'
import Logo from '../../favicon.ico'
import JobImage from '../assets/images/job-img.svg'
const Landing = () => {
  return (
   <div className='landing'>
      <div className='main-container'>
         <nav className="navbar-landing">
            <img src ={Logo} alt='jobify'/>
            <h1>Jobify</h1>
         </nav>
         <div className="container landing-page">
            <div className="page-info">
               <h1>Job <span>Tracking</span> Application</h1>
               <p>
                  I'm baby street art shoreditch try-hard taiyaki 
                  pitchfork +1 master cleanse 90's letterpress health 
                  goth sustainable. JOMO mukbang cronut, 90's lumbersexual 
               </p>
               <button>Login/Register</button>
            </div>
         </div>
      </div>
      <div className='job-img'>
         <img src={JobImage} alt='job' />
      </div>
   </div>
  )
}

export default Landing
