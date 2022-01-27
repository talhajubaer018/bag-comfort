import React, { useState } from 'react';

const createCustomerModal = ({ modalClose, createCustomerHandler }) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [state_id, setState_Id] = useState('')

  return (
    <>
      <div className='absolute top-0 left-0 w-screen h-screen opacity-75 bg-white'></div>
      <div className='w-2/4 h-1/2 absolute rounded text-xl pt-16 bg-gray-500 text-white m-auto text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <button onClick={modalClose} className='top-0 right-0 absolute py-2 px-4 bg-black rounded'>X</button>
        <h2>Add Customer</h2>
        <div className='grid grid-cols-2 pt-4 items-center w-3/4 m-auto mb-4'>
          <label htmlFor='name'>Name</label>
          <input className='text-black' type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className='grid grid-cols-2 items-center w-3/4 m-auto mb-4'>
          <label htmlFor='address'>Address</label>
          <input className='text-black' type='text' name='address' value={address} onChange={e => setAddress(e.target.value)} />
        </div>
        <div className='grid grid-cols-2 items-center w-3/4 m-auto mb-4'>
          <label htmlFor='id'>Id</label>
          <input className='text-black' type='text' name='state_id' value={state_id} onChange={e => setState_Id(e.target.value)} />
        </div>
        <button onClick={() => createCustomerHandler(name, address, state_id)} className='bg-black text-white p-4 rounded'>Enter</button>
      </div>
    </>
  )
};

export default createCustomerModal;
