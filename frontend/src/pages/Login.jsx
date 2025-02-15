import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../styles/Register.css'
import {Input ,Logo} from './index.jsx'
const formParam = [
  { id: 'email', type: 'email' },
  { id: 'password', type: 'password' }
];

const initialState = {
  email: '',
  password: ''
};

function Login() {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target.value)
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-header">
          <div>
            <img src={Logo} alt='logo' />
            <span>Jobify</span>
          </div>
          <h2>Login</h2>
        </div>
        <div className="form-input-container">
          {formParam.map((param) => (
              <Input
                key={param.id}
                label={param.id.charAt(0).toUpperCase() + param.id.slice(1)}
                id={param.id}
                type={param.type}
                value={value[param.id]}
                handleChange={handleChange}
              />            
          ))}

        </div>
        <div className="form-footer">
          <button type="submit">Submit</button>
          <h2>Not A Member Yet? <Link to="/register">Register</Link></h2>
        </div>
      </div>
    </form>
  );
}

export default Login;
