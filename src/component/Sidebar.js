import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Sidebar() {
  const isMenuOpen=useSelector(store=> store.app.isMenuOpen)
  if(!isMenuOpen) return null
  return (
    <div className='w-40 text-bold'>
      <div className='ml-2'>
        <ul className='my-5'>
          <li className='flex my-5'>
       <Link to={"/"}> <IoMdHome/> HOME  </Link>
          </li>
          <li className='flex my-3'><SiYoutubeshorts/> SHORT</li>
          <li className='flex'><i class="fa fa-subscript" aria-hidden="true"> subscriptions</i></li>
        </ul>

      </div>
      <hr/>
      <div>
        <ul className='mx-4 mb-4'>
          <li className='my-4'>Your channel</li>
          <li className='my-4'>History</li>
          <li className='my-4'>Playlist</li>
          <li className='my-4'>Your videos</li>
          <li className='my-4'>Watch later</li>
          <li className='my-4'>Liked videos</li>
          <hr/>
          <li className='my-4'>Your channel</li>
          <li className='my-4'>History</li>
          <li className='my-4'>Playlist</li>
          <li className='my-4'>Your videos</li>
          <li className='my-4'>Watch later</li>
          <li className='my-4'>Liked videos</li>
        </ul>
      </div>
      <hr/>
    </div>
  )
}

export default Sidebar;
