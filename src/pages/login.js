import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { setUserSession } from '../components/Utils/Common';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const Login = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const loginClick = (e) => {
    e.preventDefault()
    dispatch (login ( phone, password ))
  }

  useEffect (() => {
    if(userInfo) {
      router.push('/')
    }
  }, [router, userInfo])

  return (
    <div className='flex flex-col fixed top-0 left-0 w-full h-full mx-auto items-center justify-center'>
      <div className='w-1/4 mx-auto'>
        <h2 className='text-center text-white'>Sign In</h2>
        <div className='text-center flex flex-col justify-center mb-4'>
          <label className='text-left text-white'>Phone</label>
          <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white' />
        </div>
        <div className='text-center flex flex-col justify-center mb-4'>
          <label className='text-left text-white'>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white' />
        </div>
        <div>
          {error && <div className='text-red-500'>{error}</div>}
        </div>
        <div className=' text-center' onClick={loginClick}>
          <button className='w-full px-12 py-4 bg-transparent text-customTeal-500 border-solid border-1 rounded-md border-customTeal-500 hover:bg-customTeal-500 hover:text-black transition-all duration-300'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
