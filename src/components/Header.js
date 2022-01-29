import React, { useRef } from 'react';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../actions/userActions';
import Sidebar from './Sidebar';

const Header = () => {
  const dispatch = useDispatch()

  const userDropdown = useRef(null)

  const userLogin = (useSelector(state => state.userLogin))
  const { userInfo, userPhone } = userLogin

  if (typeof window !== 'undefined') {
    var userPhoneFromStorage = localStorage.getItem('userPhone') ? JSON.parse(localStorage.getItem('userPhone')) : null
  }
  const userDropdownToggle = () => {
    userDropdown.current.classList.toggle('open')
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className='flex text-center items-center px-8 py-4 bg-customGreen-700 text-white'>
      <Sidebar  />
      <Link href="/">
        <a className='ml-8'>
          <h1 className='text-xl cursor-pointer'>BAG COMFORT</h1>
        </a>
      </Link>
      <div className='flex gap-12 text-md ml-auto'>
        <h2>CART</h2>
        <h2>SEARCH</h2>
        { userInfo ?
          <div>
            <h4 onClick={userDropdownToggle} className='userPhone cursor-pointer'>{userPhoneFromStorage}</h4>
            <div ref={userDropdown} onClick={logoutHandler} className='userDropdown cursor-pointer fixed right-0 bg-customGreen-500 text-offWhite-300 hover:bg-customGreen-700 transition-all duration-300 mt-4 py-4 px-12'>
              <h4  className='hover:text-white transition-all duration-300'>Profile</h4>
              <h4  className='hover:text-white transition-all duration-300'>Logout</h4>
            </div>
          </div>
          :
          <Link href="/login">
            <a><h2>LOGIN</h2></a>
          </Link>
        }
      </div>
    </header>
  )
};

export default Header;
