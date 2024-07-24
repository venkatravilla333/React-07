import React from 'react'
import Home from './Home'
import About from './About'
import Products from './Products'
import './style.css'
import {Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ProductInfo from './ProductInfo'
import NotFound from './NotFound'

function Parent() {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path='/home' element={<Home/> } />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/products' element={<Products />}>
          <Route path=':id' element={<ProductInfo />} />
        </Route>
        
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default Parent