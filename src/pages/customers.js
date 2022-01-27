import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { listCustomers, createCustomer } from '../actions/customerActions';
import CreateCustomerModal from '../components/CreateCustomerModal';


const Customers = () => {

  const modal = useRef(null)
  const dispatch = useDispatch()

  const customerList = useSelector(state => state.customerList)
  const {customers, error, loading} = customerList

  const customerCreate = useSelector(state => state.customerCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, customer: createdCustomer} = customerCreate

  const createCustomerHandler = (name, address, state_id) => {
    if(!loadingCreate && !errorCreate) {
      dispatch(createCustomer(name, address, state_id))
      modal.current.classList.remove('show')
    }
  }
  const modalOpen = () => {
    modal.current.classList.add('show')
  }
  const modalClose = () => {
    modal.current.classList.remove('show')
  }

  useEffect(() => {
    dispatch(listCustomers())
  }, [dispatch, successCreate, createdCustomer]);



  return (
    <div className='px-8'>
      { errorCreate ? <h4 className='text-red-500'>{errorCreate.data.message}</h4> : <h4></h4> }
      <div ref={modal} className='modal '>
        <CreateCustomerModal modalClose={modalClose} createCustomerHandler={createCustomerHandler} />
      </div>
      <div className='flex items-center justify-center gap-x-8 py-4'>
        <div className='mr-auto'>
          <input className='border-2 mr-4 rounded border-black' id='search' type='search' />
          <label htmlFor='search'>Search</label>
        </div>
        <div className='ml-auto'>
          <button onClick={modalOpen} className='bg-black text-white p-4 rounded'>Add Customer</button>
        </div>
      </div>
      <div className='grid grid-cols-3 text-center items-center border-b-2'>
        <h2>Name</h2>
        <h2>Address</h2>
        <h2>State ID</h2>
      </div>
      {loading ? <h2>Loading...</h2> : !loading && customers.length === 0 ? <h2>No Customers</h2> :
        customers.map(customer => (
          <div key={customer.id} className='grid grid-cols-3 text-center items-center border-b-2'>
            <h2>{customer.name}</h2>
            <h2>{customer.address}</h2>
            <h2>{customer.state_id}</h2>
          </div>
        ))}
    </div>
  )
};

export default Customers;
