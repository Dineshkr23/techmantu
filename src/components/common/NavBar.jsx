import React, { useState } from 'react';
import '../../assets/styles/common.css';
import logo from '../../assets/images/icons/logo.webp';
import SearchIcon from '@mui/icons-material/Search';

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
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item mx-xxl-3">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item mx-xxl-3">
              <a className="nav-link" href="#">Centers Of Excellence</a>
            </li>
            <li className="nav-item mx-xxl-3">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item mx-xxl-3">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item mx-xxl-3">
              <a className="nav-link" href="#">Contact</a>
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