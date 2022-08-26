import { useRouter } from 'next/router';
import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { listCustomers, createCustomer, deleteCustomer } from '../actions/customerActions';
import { listStates } from '../actions/stateActions';
import CreateCustomerModal from '../components/CreateCustomerModal';


const Customers = () => {

  const dispatch = useDispatch()
  const router = useRouter()

  const modal = useRef(null)

  const customerList = useSelector(state => state.customerList)
  const {customers, error, loading} = customerList

  const customerCreate = useSelector(state => state.customerCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, customer: createdCustomer} = customerCreate

  const customerDelete = useSelector(state => state.customerDelete)
  const { success: successDelete } = customerDelete

  const stateList = useSelector(state => state.stateList)
  const { states } = stateList

  const userLogin = (useSelector(state => state.userLogin))
  const { userInfo } = userLogin

  const createCustomerHandler = (name, address, state_id) => {
    if(!loadingCreate && !errorCreate) {
      dispatch(createCustomer(name, address, state_id))
      modal.current.classList.remove('show')
    }
  }

  function deleteHandler(id) {
    dispatch(deleteCustomer(id))
  }
  const modalOpen = () => {
    modal.current.classList.add('show')
  }
  const modalClose = () => {
    modal.current.classList.remove('show')
  }

  useEffect(() => {
    if(!userInfo) {
      // router.push('/login')
    } else {
      dispatch(listCustomers())
      dispatch(listStates())
    }
  }, [dispatch, router, userInfo, successCreate, createdCustomer, successDelete]);



  return (
    <div className='px-8 text-white'>
      { errorCreate ? <h4 className='text-red-500'>{errorCreate.data.message}</h4> : <h4></h4> }
      <div ref={modal} className='modal fixed w-full h-full top-0 left-0 bg-customGreen-500 bg-opacity-95 z-20'>
        <CreateCustomerModal modalClose={modalClose} createCustomerHandler={createCustomerHandler} states={states} />
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
      <div className='mt-12'>
        <table className='w-full text-left border-1 border-solid '>
          <thead>
            <tr className='border-b-1 font-bold'>
              <th className='p-4 w-40'>Name</th>
              <th className='p-4'>Address</th>
              <th className='p-4 w-28 text-center'>State ID</th>
              <th className='p-4'>Delete</th>
            </tr>
          </thead>
          <tbody>
          {loading ? <tr><td>Loading...</td></tr> : !loading && customers.length === 0 ? <tr><td>No Customers</td></tr> :
            customers.map(customer => (
              <tr key={customer.id} className='border-b-1 hover:bg-offWhite-50 opacity-75 hover:opacity-100 transition-all duration-200'>
                <td className='p-4'>{customer.name}</td>
                <td className='p-4'>{customer.address}</td>
                <td className='p-4 text-center'>{customer.state_id}</td>
                <td className='p-4 cursor-pointer' onClick={() => deleteHandler(customer.id)}>DELETE ICON</td>
              </tr>
            )
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Customers;
