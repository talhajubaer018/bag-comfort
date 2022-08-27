import React, { useState, useEffect, useRef } from 'react'
import { createProduct, listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CreateProductModal from '../components/CreateProductModal'

const Products = () => {
	const dispatch = useDispatch()

	const router = useRouter()

	const modal = useRef(null)

	const productList = useSelector((state) => state.productList)
	const { products, error, loading } = productList

	const productCreate = useSelector((state) => state.productCreate)
	const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const modalOpen = () => {
		modal.current.classList.add('show')
	}
	const modalClose = () => {
		modal.current.classList.remove('show')
	}
	const createProductHandler = (name, price, stock, details) => {
		if (!loadingCreate && !errorCreate) {
			dispatch(createProduct(name, price, stock, details))
			modal.current.classList.remove('show')
		}
	}

	useEffect(() => {
		if (!userInfo) {
			router.push('/login')
		} else dispatch(listProducts())
	}, [dispatch, router, userInfo, successCreate, createdProduct])

	return (
		<div className='px-8 text-white'>
			{error && <h4>Error</h4>}
			<div ref={modal} className='modal fixed w-full h-full top-0 left-0 bg-customGreen-500 bg-opacity-95 z-20'>
				<CreateProductModal modalClose={modalClose} createProductHandler={createProductHandler} />
			</div>
			{loading && <h4>Loading</h4>}
			<div>
				<input className='border-2 border-black' id='search' type='search' />
				<label htmlFor='search'>Search</label>
			</div>
			<div className='ml-auto'>
				<button onClick={modalOpen} className='bg-black text-white p-4 rounded'>
					Add Product
				</button>
			</div>
			<div className='product-section'>
				{products.map((data) => (
					<div className='product-card' key={data.id}>
						<h1 className='product-name'>{data.name}</h1>
						<h3 className='product-name'>{data.details}</h3>
						<h3 className='product-name'>Price: {data.price}</h3>
						<h3 className='product-name'>Stock: {data.stock}</h3>
            <button className='btn'>Add to Cart</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Products
