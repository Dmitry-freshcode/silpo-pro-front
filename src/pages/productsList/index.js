import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductsList() {
  const products = useSelector(store=>store.products)

  return (
    <div>
      { products.length>0 ? (
        products.map(item=>{return <p>{item.price}</p>})
      ):(<h1>no</h1>) }
    </div>
  )
}
