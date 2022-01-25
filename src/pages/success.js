import React from 'react';
import { useRouter } from 'next/router';
import { getUser, removeUserSession } from '../components/Utils/Common';

const Success = () => {
  const router = useRouter()


  const handleLogout = () => {
    removeUserSession()
    router.push('/login')
  }

  return(
    <div>
      Login Successful for
      <input className='p-4 bg-black text-white' type='button' value='Logout' onClick={handleLogout} />
    </div>
  );
};

export default Success;
