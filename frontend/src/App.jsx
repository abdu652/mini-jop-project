import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import {Register,Landing, Dashboard, Error} from "./pages/index.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
