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
    <div className='w-1/2 mx-auto'>
      <h2 className='text-center'>LOGIN</h2>
      <div className='text-center flex flex-col justify-center mb-4'>
        <label className='text-left'>Phone</label>
        <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} className='border-2 p-2 w-full' />
      </div>
      <div className='text-center flex flex-col justify-center mb-4'>
        <label className='text-left'>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 p-2 w-full' />
      </div>
      <div>
        {error && <div className='text-red-500'>{error}</div>}
      </div>
      <div className=' text-center' onClick={loginClick}>
        <button className='px-12 py-4 rounded-full bg-black text-white'>Login</button>
      </div>
    </div>
  );
};

export default Login;
