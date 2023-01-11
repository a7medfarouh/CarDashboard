import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/profile-02.png"
export default function SideNav() {
  return <>
    <div className=' bg-light shadow-sm w-100 text-start d-flex flex-column justify-content-between '>
      <ul className=' text-start pt-2'>
        <li className="nav-item p-2">
        

          <Link className="nav-link fs-4"  to="dashboard" ><i className="fa-brands fa-dashcube  mx-2"></i>Dashboard</Link>
        </li>
        <li className="nav-item p-2">
          <Link className="nav-link fs-4" to="assets">
          <i className="fa-solid fa-pencil mx-2"></i>Assets
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link className="nav-link fs-4" to="Booking">
          <i className="fa-solid fa-car mx-2"></i>Booking
          </Link>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link fs-4" href="#">
          <i className="fa-solid fa-bag-shopping mx-2"></i>SellCars
          </a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link fs-4" href="#">
          <i className="fa-solid fa-cart-shopping mx-2"></i>BuyCar
          </a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link fs-4" href="#">
          <i className="fa-solid fa-scissors mx-2"></i>Services
          </a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link fs-4" href="#">
          <i className="fa-solid fa-calendar mx-2"></i>Celender
          </a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link fs-4" href="#">
          <i className="fa-solid fa-message mx-2"></i> Message
          </a>
        </li>
      </ul>
      <ul className=' text-start '>
        <li className="nav-item p-2">
        
        
          <a className="nav-link fs-4 "  href="#"  ><i className="fa-solid fa-gear  mx-2"></i>Settings</a>
        </li>
        <li className="nav-item p-2 ">
          <Link className="nav-link fs-4" to="logout">
          <i className="fa-solid fa-arrow-right-from-bracket mx-2"></i>Logout
          </Link>
        </li>
        
      </ul>
    </div>
  </>
}
