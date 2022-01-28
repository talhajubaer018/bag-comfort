import React, {useState, useEffect} from 'react';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


const Products = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {products, error, loading} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div className='px-8'>
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
