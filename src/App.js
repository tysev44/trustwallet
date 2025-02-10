import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up' element={<Home/>} />
        <Route path='/login' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App