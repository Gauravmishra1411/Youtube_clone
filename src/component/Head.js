import React from 'react'
import { TfiMenu } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { toggleMenu } from '../until/appSlice';
import { useDispatch} from 'react-redux'




function Head() {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    // action flase ke liye
    dispatch(toggleMenu())
  }
  return (
    <div className='flex m-2 p-2 h-12 shadow-lg shadow-grey-500/50'>
      <div className='flex shrink w-64 h-14 curser-pointer  '>
        
        <TfiMenu className='mr-2' onClick={()=>{toggleMenuHandler()}}/>
        <img className='w-25 h-5 ml-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' alt='youtube' />
        
      
      
      </div>
      <div className='Shrink w-full items-stretch  '>
        <input className='shadow-lg border border-indigo-600 w-1/2 h-8 rounded-l-lg mr-4 self-center' type='text' placeholder='Search'/>
      <button className='mr-3 shadow-lg bg bg-gray-00'><IoSearchOutline/></button>
      <button><MdKeyboardVoice/></button>
      </div>
      
      <div className='flex justify-between mr-10'>
       <div className='mx-10 border border-slate-950	 w-5 h-5 rounded-full'>
       <IoIosNotifications/>
        
        </div>
        <div className='mx-9 border border-slate-950	 w-7 h-7 rounded-full'>
        <FaUserAlt/>
          </div> 
         </div>
    </div>
  )
}

export default Head
