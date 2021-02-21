import React from 'react'
import { useSelector } from 'react-redux';
import ProductsList from '../../components/productsList'

export default function AllProducts() {
    const products = useSelector(store=>store.products); 
  return (
   <ProductsList products={products}/>
  )
}
