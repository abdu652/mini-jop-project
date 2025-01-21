import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Landing from './pages/Landing'
const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;   

  `
function App() {
  return (
    <>
      <Landing/>
      <Button>Click me</Button>
    </>
  )
}

export default App
