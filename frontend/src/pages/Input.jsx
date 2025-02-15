import React from 'react';

const Input = ({ label, value, id, handleChange, type }) => {
  return (
    <div className="form-input" key={id}>
      <label htmlFor={id}>{label || id}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;