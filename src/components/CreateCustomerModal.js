import React, { useState } from 'react';

const CreateCustomerModal = ({ modalClose, createCustomerHandler }) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [state_id, setState_Id] = useState('')

  return (
    <>
      <div className='modal-card relative w-2/4 h-1/2 rounded text-xl text-white m-auto text-center top-1/2 transform -translate-y-1/2'>
          <button onClick={modalClose} className='top-0 right-0 absolute z-20 m-8 text-offWhite-300 hover:text-white transition-all duration-300'>X</button>
          <h2 className='z-10 pt-8 relative'>Add Customer</h2>
          <div className='flex flex-col pt-4 text-left w-3/4 m-auto mb-4'>
            <label className='z-10' htmlFor='name'>Name</label>
            <input className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white z-20' type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className='flex flex-col text-left w-3/4 m-auto mb-4'>
            <label className='z-10' htmlFor='address'>Address</label>
            <input className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white z-20' type='text' name='address' value={address} onChange={e => setAddress(e.target.value)} />
          </div>
          <div className='flex flex-col text-left w-3/4 m-auto mb-4'>
            <label className='z-10' htmlFor='id'>State Id</label>
            <input className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white z-20' type='text' name='state_id' value={state_id} onChange={e => setState_Id(e.target.value)} />
          </div>
          <div>
            <button onClick={() => createCustomerHandler(name, address, state_id)} className='z-20 relative bg-transparent border-1 border-customTeal-500 text-customTeal-500 hover:bg-customTeal-500 hover:text-white p-4 rounded transition-all duration-200'>Enter</button>
          </div>
          <div class="modal-card-arrow">
            <div class="modal-card-arrow-top-left absolute top-0 left-0 w-2 h-2 border-white"></div>
            <div class="modal-card-arrow-top-right absolute top-0 right-0 w-2 h-2 border-white"></div>
            <div class="modal-card-arrow-bottom-left absolute bottom-0 left-0 w-2 h-2 border-white"></div>
            <div class="modal-card-arrow-bottom-right absolute bottom-0 right-0 w-2 h-2 border-white"></div>
          </div>
      </div>
    </>
  )
};

export default CreateCustomerModal;


