import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const hamburger = useRef(null)
  const sideMenu = useRef(null)

  const userLogin = (useSelector(state => state.userLogin))
  const { userInfo } = userLogin

  const navToggle = () => {
    hamburger.current.classList.toggle('open')
    console.log(hamburger.current)
    sideMenu.current.classList.toggle('open')
  }
  useEffect(() => {
    if(!showSideMenu) return

    const handleClick = (e) => {
      if (sideMenu.current && sideMenu.current.contains(e.target)) {
        setShowSideMenu(false)
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [showSideMenu])

  return (
    <div className='text-left text-offWhite-300'>
      <button ref={hamburger} onClick={navToggle} className='hamburger cursor-pointer w-6 h-6 relative bg-none border-none z-30 transition-all duration-300'>
        <span className='hamburger-top absolute top-0 left-0 w-6 h-0.5 bg-white transform rotate-0 transition-all duration-500'></span>
        <span className='hamburger-middle absolute top-0 left-0 w-6 h-0.5 bg-white transform rotate-0 transition-all duration-500 translate-y-2'></span>
        <span className='hamburger-bottom absolute top-0 left-0 w-6 h-0.5 bg-white transform rotate-0 transition-all duration-500 translate-y-4'></span>
      </button>
      <div ref={sideMenu} className='sideMenu bg-customGreen-500 flex flex-col gap-12 text-xl fixed w-1/4 h-full left-0 px-8 py-8 mt-4'>
        <Link href="/shop">
          <a><h2 onClick={navToggle} className='hover:text-white transition-all duration-300'>SHOP</h2></a>
        </Link>
        {
          userInfo &&
            <Link href="/products">
              <a><h2 onClick={navToggle} className='hover:text-white transition-all duration-300'>PRODUCTS</h2></a>
            </Link>
        }
        {
          userInfo &&
          <Link href="/customers">
            <a><h2 onClick={navToggle} className='hover:text-white transition-all duration-300'>CUSTOMERS</h2></a>
          </Link>
        }

      </div>
    </div>
  )
};

export default Sidebar;
