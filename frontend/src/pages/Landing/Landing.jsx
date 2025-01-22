import React from 'react'
import  './Landing.css'
import Logo from '../../../favicon.ico'
const Landing = () => {
  return (
    <main className='landing'>
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
         <div>img</div>
      </div>
    </main>
  )
}

export default Landing
