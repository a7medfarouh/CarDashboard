import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'
import TopNav from '../TopNav/TopNav'

export default function Layout() {
  return <>
  <TopNav/>
  <div className='d-flex '>
    <div className='w-25 '>
    <SideNav/>
    </div>
    <div className='w-75  '>
      <div className='d-flex justify-content-center align-items-center p-3'>
      <Outlet/>
      </div>
    
    </div>
  </div>
 
  </>
}
