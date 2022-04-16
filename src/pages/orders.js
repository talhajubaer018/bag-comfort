import React, {useState, useEffect} from 'react';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { listOrders } from '../actions/orderActions';


const Orders = () => {
  const dispatch = useDispatch()

  const router = useRouter()

  const productList = useSelector(state => state.productList)
  const {products, error, loading} = productList

  const orderList = useSelector(state => state.orderList)
  const { orders } = orderList

  const userLogin = (useSelector(state => state.userLogin))
  const { userInfo } = userLogin

  useEffect(() => {

    if(!userInfo) {
      router.push('/login')
    } else
    dispatch(listProducts())
    dispatch(listOrders())
  }, [dispatch, router, userInfo]);

  return (
    <div className='px-8 text-white'>
      { error && <h4>Error</h4> }
      { loading && <h4>Loading</h4> }
      <div>
        <input className='border-2 border-black' id='search' type='search' />
        <label htmlFor='search'>Search</label>
      </div>
      <div className='grid grid-cols-6 text-center items-center border-b-2'>
        <h2>Customer Id</h2>
        <h2>State Id</h2>
        <h2>Subtotal</h2>
        <h2>Tax</h2>
        <h2>Total</h2>
        <h2>Ordered Items</h2>
      </div>
      {orders.map(order => (
        <div key={order.id} className='grid grid-cols-6 text-center items-center border-b-2'>
          <h2>{order.customer_id}</h2>
          <h2>{order.state_id}</h2>
          <h2>{order.sub_total}</h2>
          <h2>{order.tax}</h2>
          <h2>{order.total}</h2>
          <h2>{order.order_items}</h2>
        </div>
      ))}
    </div>
  )
};

export default Orders
