import React from 'react'
import Home from './Home'
// import About from './About'
import Products from './Products'
import './style.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ProductInfo from './ProductInfo'
import NotFound from './NotFound'
import Login from './Login'
import Loader from './Loader'
var LazyCom = React.lazy(()=> import('./About'))

function Parent() {
 var location =  useLocation()
  return (
    <div>
      {/* <Header/> */}
      {location.pathname != '/login' && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/about'
          element={
            <React.Suspense fallback='loading'>
              <LazyCom />
            </React.Suspense>
          }
        />
        <Route path='*' element={<NotFound />} />
        <Route path='/products' element={<Products />}>
          <Route path=':id' element={<ProductInfo />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
      {location.pathname != '/login' && <Footer />}
    </div>
  );
}

export default Parent