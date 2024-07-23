import React from 'react'
import Home from './Home'
import About from './About'
import Products from './Products'
import './style.css'
import {Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Parent() {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path='/home' element={<Home/> } />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products/> } />
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default Parent