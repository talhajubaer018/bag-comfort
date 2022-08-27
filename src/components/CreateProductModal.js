import React, { useState } from 'react';

const CreateProductModal = ({ modalClose, createProductHandler, states }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [details, setDetails] = useState('')

  return (
    <>
      <div className='modal-card relative w-2/4 h-3/4 rounded text-xl text-white m-auto text-center top-1/2 transform -translate-y-1/2'>
          <button onClick={modalClose} className='top-0 right-0 absolute z-20 m-8 text-offWhite-300 hover:text-white transition-all duration-300'>X</button>
          <h2 className='z-10 pt-8 relative'>Add Customer</h2>
          <div className='flex flex-col pt-4 text-left w-3/4 m-auto mb-4'>
            <label className='z-10' htmlFor='name'>Name</label>
            <input className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white z-20' type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className='flex flex-col text-left w-3/4 m-auto mb-4'>
            <label className='z-10' htmlFor='address'>Price</label>
            <input className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white z-20' type='number' name='price' value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className='flex flex-col text-left w-3/4 m-auto mb-4'>
            <label className='z-10' htmlFor='address'>Stock</label>
            <input className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white z-20' type='number' name='stock' value={stock} onChange={e => setStock(e.target.value)} />
          </div>
          <div className='flex flex-col text-left w-3/4 m-auto mb-4'>
            <label className='z-10' htmlFor='address'>Details</label>
            <textarea className='input border-2 border-solid border-offWhite-300 rounded-md p-2 w-full bg-offWhite-50 opacity-50 text-white z-20' type='textarea' name='details' value={details} onChange={e => setDetails(e.target.value)} />
          </div>
          <div>
            <button onClick={() => createProductHandler(name, price, stock, details)} className='z-20 relative bg-transparent border-1 border-customTeal-500 text-customTeal-500 hover:bg-customTeal-500 hover:text-white p-4 rounded transition-all duration-200'>Enter</button>
          </div>
          <div className="modal-card-arrow">
            <div className="modal-card-arrow-top-left absolute top-0 left-0 w-2 h-2 border-white"></div>
            <div className="modal-card-arrow-top-right absolute top-0 right-0 w-2 h-2 border-white"></div>
            <div className="modal-card-arrow-bottom-left absolute bottom-0 left-0 w-2 h-2 border-white"></div>
            <div className="modal-card-arrow-bottom-right absolute bottom-0 right-0 w-2 h-2 border-white"></div>
          </div>

      </div>
    </>
  )
};

export default CreateProductModal;


