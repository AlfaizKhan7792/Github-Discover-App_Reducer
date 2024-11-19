import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import UserProfileCard from './pages/Details'
import { CardDataProvider } from './providers/cardData/CardDataContext'
import Home from './pages/Home'
import { UserDataProvider } from './providers/usersData/UserDataContext'


const App = () => {
  return (
  <CardDataProvider>
    <UserDataProvider>
      <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/userprofile/:username' element={<UserProfileCard />} />
      <Route path='*' element={<Home />} />
    </Routes>
    </Router>
    </UserDataProvider>
  </CardDataProvider>
  )
}

export default App
