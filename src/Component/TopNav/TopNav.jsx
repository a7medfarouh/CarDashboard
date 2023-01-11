import React from 'react'
import logo from "../../assets/images/profile-02.png"

export default function TopNav() {
  return <>
  <nav className="navbar navbar-expand-lg  bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <i className="fa-solid fa-m bg-info p-2 rounded-1 mx-2"></i>

     Motiv</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex  align-items-center mx-auto " role="search">
        <input className="form-control me-2" type="search " placeholder="    Search or type" aria-label="Search"/>
        <i className="fa-solid fa-magnifying-glass position-absolute ms-1 fa-1x"></i>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" ><i className="fa-solid fa-bell"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={logo} className="rounded-circle w-50" />
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  
  </>
}
