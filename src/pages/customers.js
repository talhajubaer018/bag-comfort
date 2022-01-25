import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')

  const modal = useRef(null)

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const getCustomers = async () => {
    setLoading(true)
    try {
      const res = await authAxios.get(`https://bagcomfort.com/api/customer`)
      setCustomers(res.data.data)
      setLoading(false)

      console.log(customers, res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const onSubmit = () => {
    console.log(name, address, id)
  }
  const modalOpen = () => {
    modal.current.classList.add('show')
  }
  const modalClose = () => {
    modal.current.classList.remove('show')
  }

  useEffect(() => {
    getCustomers()
  }, []);



  return (
    <div className='px-8'>
      <div ref={modal} className='modal'>
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
            <input className='text-black' type='text' name='id' value={id} onChange={e => setId(e.target.value)} />
          </div>
          <button onClick={onSubmit} className='bg-black text-white p-4 rounded'>Enter</button>
        </div>
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
