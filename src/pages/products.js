import React, {useState, useEffect} from 'react';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const Products = () => {
  const dispatch = useDispatch()

  const router = useRouter()

  const productList = useSelector(state => state.productList)
  const {products, error, loading} = productList

  const userLogin = (useSelector(state => state.userLogin))
  const { userInfo } = userLogin

  useEffect(() => {

    if(!userInfo) {
      router.push('/login')
    } else
    dispatch(listProducts())
  }, [dispatch, router, userInfo]);

  return (
    <div className='px-8 text-white'>
      { error && <h4>Error</h4> }
      { loading && <h4>Loading</h4> }
      <div>
        <input className='border-2 border-black' id='search' type='search' />
        <label htmlFor='search'>Search</label>
      </div>
      <div className='grid grid-cols-4 text-center items-center border-b-2'>
        <h2>Name</h2>
        <h2>Price</h2>
        <h2>Stock</h2>
        <h2>Details</h2>
      </div>
      {products.map(product => (
        <div key={product.id} className='grid grid-cols-4 text-center items-center border-b-2'>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h2>{product.stock}</h2>
          <h2>{product.details}</h2>
        </div>
      ))}
    </div>
  )
};

export default Products
