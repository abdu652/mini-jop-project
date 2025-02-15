import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../favicon.ico'
import '../styles/Register.css'
const formParam = [
  { id: 'name', type: 'text' },
  { id: 'email', type: 'email' },
  { id: 'password', type: 'password' }
];

const initialState = {
  name: '',
  email: '',
  password: ''
};

function Register() {
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
          <h2>Register</h2>
        </div>
        <div className="form-input-container">
          {formParam.map((param) => (
            <div className="form-input" key={param.id}>
              <label htmlFor={param.id}>
                {param.id.charAt(0).toUpperCase() + param.id.slice(1)}
              </label>
              <input
                id={param.id}
                type={param.type}
                value={value[param.id]}
                onChange={handleChange}
              />
            </div>
          ))}

        </div>
        <div className="form-footer">
          <button type="submit">Submit</button>
          <h2>Already A Member? <Link to="/login">Login</Link></h2>
        </div>
      </div>
    </form>
  );
}

export default Register;
