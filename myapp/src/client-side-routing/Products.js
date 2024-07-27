import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import './style.css'

function Products() {
  var [products] = useState([
    {
      id: 1,
      name: 'Apple',
      price: 25,
      qty: 10,
    },
    {
      id: 2,
      name: 'Banana',
      price: 30,
      qty: 12,
    },
    {
      id: 3,
      name: 'Grape',
      price: 50,
      qty: 5,
    },
    {
      id: 4,
      name: 'Tamato',
      price: 40,
      qty: 5,
    },
  ]);
  return (
    <div>
      <ul>
        {products.map((product) => {
          return <li>
            <NavLink state={product} to={`/products/${product.id}`} >{product.name}</NavLink>
            </li>       
        })}
        <Outlet/>
        
      </ul>
    </div>
  );
}

export default Products