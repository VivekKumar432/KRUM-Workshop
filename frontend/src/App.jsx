import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';

export default function App () {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </Router>
  )
}

// export default App
