import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import UserProfileCard from './pages/Details'
import { CardDataProvider } from './providers/cardData/CardDataContext'
import Home from './pages/Home'


const App = () => {
  return (
  <CardDataProvider>
      <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/userprofile' element={<UserProfileCard />} />
    </Routes>
    </Router>
  </CardDataProvider>
  )
}

export default App
