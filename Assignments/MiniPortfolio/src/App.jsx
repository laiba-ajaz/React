import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home'
import Navbar from './layout/navbar.jsx'
import ProjectDetail from './Pages/ProjectDetail.jsx'
import Footer from './layout/footer.jsx';



export default function App() {
  return (
    <>

      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projectDetail/:id' element={<ProjectDetail />} />
      </Routes>


      <Footer />

    </>
  )
}