import { useState } from 'react'
import Home from './pages/home'
import About from './pages/about'
import PageUp from './components/pageUp'
import Programs from './pages/programs'
import GetInvolved from './pages/getInvolved'
import Blog from './pages/blog'
import Contacts from './pages/contacts'
import Donate from './pages/donate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <PageUp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/programs' element={<Programs />}></Route>
        <Route path='/getInvolved' element={<GetInvolved />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/donate' element={<Donate />}></Route>
      </Routes>
    </Router>
  )
}

export default App
