import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
  <div className="container">
    <Link className="navbar-brand p-2 fw-bold" to="/">Collections</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Product</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact</Link>
        </li>
      </ul> */}

      <div className='buttons ms-auto'>
        <Link to='/login' className='btn btn-outline-dark'>
            <i className='fa fa-sign-in'></i> Login  </Link>
        
        <Link to='/register' className='btn btn-outline-dark ms-2'>
            <i className='fa fa-user-plus'></i> Register  </Link>
        
        <Link to='/cart' className='btn btn-outline-dark ms-2'>
            <i className='fa fa-cart-shopping'></i> Cart (0)  </Link>
       
        <Link to='/logout' className='btn btn-outline-dark ms-2'>
            <i className='fa fa-sign-out'></i> Logout  </Link>
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Nav;
