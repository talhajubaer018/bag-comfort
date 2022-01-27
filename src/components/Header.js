import React from 'react';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = (useSelector(state => state.userLogin))
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className='grid grid-cols-3 text-center items-center px-16 py-8'>
      <div className='flex gap-12 text-xl'>
        <h2>SHOP</h2>
        <Link href="/products">
          <a><h2>PRODUCTS</h2></a>
        </Link>
        <Link href="/customers">
          <a><h2>CUSTOMERS</h2></a>
        </Link>
      </div>
      <div>
        <h1 className='text-3xl'>BAG COMFORT</h1>
      </div>
      <div className='flex gap-12 text-xl ml-auto'>
        {
          userInfo ? (<h4 onClick={logoutHandler}>Logout</h4>) :
          <Link href="/login">
            <a><h2>LOGIN</h2></a>
          </Link>
        }


        <h2>CART</h2>
        <h2>SEARCH</h2>
      </div>
    </div>
  )
};

export default Header;
