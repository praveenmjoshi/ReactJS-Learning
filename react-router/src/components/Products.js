import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
        
        <p>Products components</p>
        <nav className="prod-nav-bar">
          <NavLink to="features"> Features </NavLink>
          <NavLink to="services"> Services </NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default Products