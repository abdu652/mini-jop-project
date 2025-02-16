import React from 'react'
import { useAppContext } from '../context/appContext.jsx' 
import '../styles/Alert.css'
const Alert = () => {
  const { alertText, alertType } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
        <h3>{alertText}</h3>
    </div>
  )
}

export default Alert