import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css'
import {Alert, Input, Logo,useAppContext} from './index.jsx'

const initialState = {
  name: '',
  email: '',
  password: ''
};

function Register() {
  const [value, setValue] = useState(initialState);
  const [isMember, setIsMember] = useState(false);
  const {showAlert,displayAlert} = useAppContext();
  const formParam = isMember ?[
    { id: 'email', type: 'email' },
    { id: 'password', type: 'password' }
  ]: [
    {id:'name',type:'text'},
    { id: 'email', type: 'email' },
    { id: 'password', type: 'password' }
  ]
  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email,password,name} = value;
    if(!email || !password || (!isMember && !name)){
      displayAlert('Please fill all the fields','danger','SHOW_ALERT');
      return;
  };
  console.log('submitting form');
  }
  const toggleMember = ()=>{
    setIsMember(!isMember);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-header">
          <div>
            <img src={Logo} alt="logo" />
            <span>Jobify</span>
          </div>
          <h2>{isMember? "Login":"Register"}</h2>
        </div>
        <div className="alert-container">
          {showAlert && <Alert />}
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
          <div className="reg-btn">
          <h2>
            {isMember ? "Not A Member Yet?":"Already A Member?" }
          </h2>
          <button className='btn' onClick={toggleMember}>{isMember ? "Register":"Login"}</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;