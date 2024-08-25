import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


function Body() {
  return (
    <div className='flex border border-black'>
    <div className='border border-3-red shadow-full '><Sidebar/></div>
    <Outlet/>
    </div>
  )
}

export default Body
