import React, { useState } from 'react';
import '../../assets/styles/common.css';
import logo from '../../assets/images/icons/logo.webp';
import SearchIcon from '@mui/icons-material/Search';
import {NavLink} from "react-router-dom";

function NavBar() {
  let [status, setStatus] = useState(false);

  // Handler for search bar visibility
  let searchBarVisibility = (e)=>{
    e.preventDefault();
    setStatus(!status);
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white rounded-1 px-sm-4">
      <div className="container-fluid">
        <a className="navbar-brand mx-0" href="#home">
            <img src={logo} alt="TechMantu"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0 navLinks" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item mx-xxl-3">
              <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item mx-xxl-3">
            <NavLink to="/services" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} className="nav-link">Services</NavLink>
            </li>

            <li className="nav-item mx-xxl-3">
            <NavLink to="/centersOfExcellence" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} className="nav-link">Centers Of Excellence</NavLink>
            </li>

            <li className="nav-item mx-xxl-3">
            <NavLink to="/blog" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} className="nav-link">Blog</NavLink>
            </li>

            <li className="nav-item mx-xxl-3">
            <NavLink to="/aboutUs" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} className="nav-link">About Us</NavLink>
            </li>

            <li className="nav-item mx-xxl-3">
            <NavLink to="/contactUs" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} className="nav-link">Contact</NavLink>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className={status?"form-control me-2":"form-control me-2 d-none"} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn text-danger" type="submit" onClick={searchBarVisibility}><SearchIcon/></button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar