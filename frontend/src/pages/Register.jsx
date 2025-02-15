import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../favicon.ico';
import '../styles/Register.css';
import Input from './Input.jsx';

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
            <img src={Logo} alt="logo" />
            <span>Jobify</span>
          </div>
          <h2>Register</h2>
        </div>
        <div className="form-input-container">
          {formParam.map((param) => (
            <Input
              key={param.id} // Use param.id as the key
              label={param.id.charAt(0).toUpperCase() + param.id.slice(1)} // Corrected prop name
              id={param.id}
              type={param.type}
              value={value[param.id]}
              handleChange={handleChange} // Corrected prop name
            />
          ))}
        </div>
        <div className="form-footer">
          <button type="submit">Submit</button>
          <h2>
            Already A Member? <Link to="/login">Login</Link>
          </h2>
        </div>
      </div>
    </form>
  );
}

export default Register;